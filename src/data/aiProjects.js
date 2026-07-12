export const aiProjects = [
  {
    id: "chest-xray-gan",
    title: "cGAN Chest X-Ray Image Enhancement",
    subtitle: "Generative Enhancement of Low-Quality Chest X-Ray Images Using Generative Adversarial Networks",
    tech: "Python, pix2pix cGAN, PyTorch, HuggingFace",
    year: 2026,
    type: "ai",
    image: "images/chest-gan.png",

    description:
      "A deep learning system that restores low-quality chest X-ray images using a Conditional GAN. Reaching 87% structural similarity. Tested on 734 images: perceptual error dropped 86%, pixel clarity (PSNR) roughly doubled, and every single image improved.",

    problem:
      "Chest X-rays are one of the first tests for diagnosing lung diseases like pneumonia, tuberculosis, and lung cancer. Radiation has to stay low, especially for vulnerable patients. Under the ALARA principle, doses are minimized, and the tradeoff is images that come out noisy and short on structural detail. Portable and emergency settings make this worse, since hardware limits and patient movement add blur. The result is scans that are harder to interpret for both clinicians and automated systems.",

    approach:
      "The system uses a pix2pix Conditional GAN with a U-Net generator and PatchGAN discriminator. Since the NIH dataset does not include paired degraded images, clean scans were synthetically degraded using Gaussian noise, blur, and downsampling at three severity levels to build the training pairs. Training ran in two stages: L1 pre-training to establish pixel accuracy, then adversarial fine-tuning with perceptual and edge losses to get sharpness back.",

    dataset:
      "The sole data source is the NIH Chest X-ray dataset, an open-source benchmark widely used in medical imaging. Grayscale frontal-view images were resized, normalized, and paired with synthetically degraded versions to simulate low-dose and portable imaging conditions. The split was 70/15/15 across training, validation, and testing.",

    metrics: [
      {
        label: "PSNR Gain",
        value: "+16.70 dB",
        detail: "15.76 → 32.46 dB",
        description: "Peak Signal-to-Noise Ratio: pixel-level signal fidelity",
      },
      {
        label: "SSIM Gain",
        value: "+0.563",
        detail: "0.309 → 0.872",
        description: "Structural Similarity Index: luminance, contrast, and structure",
      },
      {
        label: "LPIPS Reduction",
        value: "−86%",
        detail: "0.828 → 0.112",
        description: "Learned Perceptual Similarity: how closely the output matches human perception",
      },
    ],

    highlights: [
      "All 734 test images improved on every metric: PSNR, SSIM, and LPIPS. No exceptions.",
      "Beat the widely used CLAHE baseline across all three metrics by a clear margin.",
      "Two-stage training (L1 pre-train then adversarial fine-tune) recovered sharpness that a pure pixel-wise loss would have smoothed over.",
      "VGG perceptual and edge loss pushed structural sharpness further without losing tonal accuracy.",
      "Held up on degradation types it had not seen during training.",
      "Every reported gain was statistically significant (p < 0.05) across the test set.",
    ],

    toolsUsed: [
      "Python",
      "PyTorch",
      "pix2pix Conditional GAN",
      "U-Net Generator",
      "PatchGAN Discriminator",
      "NIH Chest X-ray Dataset",
      "PSNR / SSIM / LPIPS",
      "Gradio",
      "HuggingFace Spaces",
      "Google Colab",
    ],

    links: {
      demo: "https://huggingface.co/spaces/imranrszd/chest-xray-gan-enhancement",
      samples: "https://drive.google.com/drive/folders/1Y9-SOr1_2kW8_vxeDanWdYGDNkEsfSGl?usp=sharing",
    },
  },
];
