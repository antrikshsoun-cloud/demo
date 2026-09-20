import os
import glob
import math
import cv2
import numpy as np
from PIL import Image
from concurrent.futures import ThreadPoolExecutor

p1_dir = r"c:\Users\Antriksh\Downloads\clientproject1"
p2_dir = r"c:\Users\Antriksh\Downloads\clientproject2"
out_dir = r"c:\Users\Antriksh\Downloads\fli-capital-3d\public\sequence"

os.makedirs(out_dir, exist_ok=True)

p1_files = sorted(glob.glob(os.path.join(p1_dir, "*.jpg")))
p2_files = sorted(glob.glob(os.path.join(p2_dir, "*.jpg")))

print(f"Found {len(p1_files)} frames in P1, {len(p2_files)} frames in P2")

# We have:
# 1..300: P1
# 301..324: 24 transition frames between P1[-1] and P2[0]
# 325..624: P2

TRANSITION_COUNT = 24
TOTAL_FRAMES = len(p1_files) + TRANSITION_COUNT + len(p2_files)
print(f"Total output frames will be: {TOTAL_FRAMES}")

# Load transition source frames
im1_last = cv2.imread(p1_files[-1]).astype(np.float32)
im2_first = cv2.imread(p2_files[0]).astype(np.float32)

def generate_transition_frame(i):
    t = (i + 1) / (TRANSITION_COUNT + 1)
    # Quintic smoothstep curve for ultra-gentle acceleration and deceleration
    alpha = t * t * t * (t * (t * 6.0 - 15.0) + 10.0)
    
    h, w = im1_last.shape[:2]
    center = (w / 2.0, h / 2.0)
    
    # Push-in focal zoom: im1 zooms slightly from 1.00 to 1.025, im2 zooms out from 1.025 to 1.00
    zoom1 = 1.0 + 0.025 * t
    zoom2 = 1.0 + 0.025 * (1.0 - t)
    
    M1 = cv2.getRotationMatrix2D(center, 0, zoom1)
    M2 = cv2.getRotationMatrix2D(center, 0, zoom2)
    
    z1 = cv2.warpAffine(im1_last, M1, (w, h), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_REFLECT_101)
    z2 = cv2.warpAffine(im2_first, M2, (w, h), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_REFLECT_101)
    
    # Rack focus depth-of-field blur - bell curve peaking at midpoint
    blur_amount = math.sin(t * math.pi) * 12.0
    blur_k = int(blur_amount)
    if blur_k % 2 == 0:
        blur_k += 1
        
    if blur_k > 1:
        b1 = cv2.GaussianBlur(z1, (blur_k, blur_k), 0)
        b2 = cv2.GaussianBlur(z2, (blur_k, blur_k), 0)
    else:
        b1, b2 = z1, z2
        
    blend = (1.0 - alpha) * b1 + alpha * b2
    
    # Elegant emerald & golden lighting bloom at the apex of the transition
    bloom = math.sin(t * math.pi) * 12.0
    tint = np.array([bloom * 0.30, bloom * 0.75, bloom * 0.85], dtype=np.float32) # BGR
    blend = np.clip(blend + tint, 0, 255).astype(np.uint8)
    
    # Convert BGR to RGB for PIL
    rgb = cv2.cvtColor(blend, cv2.COLOR_BGR2RGB)
    return Image.fromarray(rgb)

def process_frame(target_idx):
    out_path = os.path.join(out_dir, f"frame_{target_idx:04d}.webp")
    if os.path.exists(out_path):
        return
        
    if target_idx <= len(p1_files):
        # From P1
        src_path = p1_files[target_idx - 1]
        im = Image.open(src_path)
        im.save(out_path, "WEBP", quality=85)
    elif target_idx <= len(p1_files) + TRANSITION_COUNT:
        # Transition
        trans_idx = target_idx - len(p1_files) - 1
        im = generate_transition_frame(trans_idx)
        im.save(out_path, "WEBP", quality=85)
    else:
        # From P2
        p2_idx = target_idx - len(p1_files) - TRANSITION_COUNT - 1
        src_path = p2_files[p2_idx]
        im = Image.open(src_path)
        im.save(out_path, "WEBP", quality=85)

print("Starting parallel frame conversion to WebP...")
with ThreadPoolExecutor(max_workers=8) as executor:
    list(executor.map(process_frame, range(1, TOTAL_FRAMES + 1)))

print(f"Successfully generated all {TOTAL_FRAMES} frames in {out_dir}")
