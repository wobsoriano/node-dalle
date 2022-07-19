from min_dalle import MinDalle
from io import BytesIO
import base64
import torch

def generate_image(
    text: str,
    grid_size: int = 1,
    is_mega: bool = False,
    seed: int = -1,
    top_k: int = 256,
    models_root: str = 'pretrained',
    fp16: bool = False,
):
    model = MinDalle(
        is_mega=is_mega, 
        models_root=models_root,
        is_reusable=False,
        is_verbose=True,
        dtype=torch.float16 if fp16 else torch.float32
    )

    image = model.generate_image(
        text, 
        seed, 
        grid_size, 
        top_k=top_k, 
        is_verbose=True
    )

    buffered = BytesIO()
    image.save(buffered, format="PNG")
    buffered.seek(0)
    img_byte = buffered.getvalue()
    img_str = "data:image/png;base64," + base64.b64encode(img_byte).decode()
    return img_str
