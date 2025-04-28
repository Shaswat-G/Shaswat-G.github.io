---
title: "SimpleSleepNet"
excerpt: "A lightweight self-supervised contrastive-learning framework for EEG-based sleep stage classification"
sidebar:
  nav: "SimpleSleepNet"
toc: true
toc_sticky: true
header:
  teaser: /assets/images/projects/dnn.jpg
# SEO meta
description: "SimpleSleepNet: Lightweight self-supervised deep learning for EEG-based sleep stage classification. Achieve 80%+ accuracy with minimal labeled data. Open-source, modular, and edge-deployable."
author: "Shaswat Gupta"
image: /assets/images/projects/dnn.jpg
keywords:
  [
    "SimpleSleepNet",
    "EEG",
    "Sleep Stage Classification",
    "Self-Supervised Learning",
    "Contrastive Learning",
    "Deep Learning",
    "PyTorch",
    "ETH Zurich",
    "AI Research",
    "Edge AI",
    "Data Science",
    "Machine Learning",
    "Open Source",
  ]
---

<!-- SEO meta tags -->
<meta name="description" content="SimpleSleepNet: Lightweight self-supervised deep learning for EEG-based sleep stage classification. Achieve 80%+ accuracy with minimal labeled data. Open-source, modular, and edge-deployable.">
<meta name="keywords" content="SimpleSleepNet, EEG, Sleep Stage Classification, Self-Supervised Learning, Contrastive Learning, Deep Learning, PyTorch, ETH Zurich, AI Research, Edge AI, Data Science, Machine Learning, Open Source">
<meta name="author" content="Shaswat Gupta">
<meta property="og:title" content="SimpleSleepNet: Self-Supervised Contrastive Learning for EEG-Based Sleep Stage Classification">
<meta property="og:description" content="Lightweight self-supervised deep learning for EEG-based sleep stage classification. Achieve 80%+ accuracy with minimal labeled data. Open-source, modular, and edge-deployable.">
<meta property="og:image" content="/assets/images/projects/dnn.jpg">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="SimpleSleepNet: Self-Supervised Contrastive Learning for EEG-Based Sleep Stage Classification">
<meta name="twitter:description" content="Lightweight self-supervised deep learning for EEG-based sleep stage classification. Achieve 80%+ accuracy with minimal labeled data. Open-source, modular, and edge-deployable.">
<meta name="twitter:image" content="/assets/images/projects/dnn.jpg">

![Project Demo](/assets/images/projects/simplesleepnet-architecture.svg)

# SimpleSleepNet: Self-Supervised Contrastive Learning for EEG-Based Sleep Stage Classification

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
[![PyTorch 2.0+](https://img.shields.io/badge/PyTorch-2.0.0+-red.svg)](https://pytorch.org/)
[![TensorBoard](https://img.shields.io/badge/TensorBoard-Enabled-green.svg)](https://www.tensorflow.org/tensorboard)
![License](https://img.shields.io/badge/License-MIT-green)

**Author:** Shaswat Gupta  
**Group:** Medical Data Science, D-INFK, ETH Zurich  
**Supervisor:** Prof. Dr. Julia Vogt  
**Contact:** [shagupta@ethz.ch](mailto:shagupta@ethz.ch)  
**Project Repository:** [SimpleSleepNet](https://gitlab.ethz.ch/shagupta/simplesleepnet)

## Overview

SimpleSleepNet is a lightweight self-supervised deep-learning framework for EEG-based sleep stage classification using self-supervised contrastive representation learning achieving 80%+ accuracy with minimal labeled data and a remarkably compact architecture (~200K parameters).

<div class="page__download" style="text-align:center; margin: 2em 0;">
  <a href="https://gitlab.ethz.ch/shagupta/simplesleepnet" class="btn btn--primary" target="_blank" rel="noopener">
    <i class="fab fa-github"></i> View on GitLab
  </a>
</div>

<div class="page__download" style="text-align:center; margin: 2em 0;">
  <a href="/assets/files/SimpleSleepNet-Report.pdf" class="btn btn--primary" download>
    <i class="fas fa-file-pdf"></i> Download Full Report (PDF)
  </a>
</div>

### Key Features

- **Self-supervised pretraining** with optimized EEG-specific augmentations
- **Systematic augmentation evaluation** across amplitude, frequency, temporal, and masking domains
- **Modular architecture** with clean separation between pretraining and supervised fine-tuning
- **Lightweight models** suitable for edge deployment (< 1MB model size)
- **Comprehensive evaluation** of latent space quality via clustering metrics and dimensionality reduction
- **Reproducible experimentation** framework with configuration-driven workflows
- **HPC-ready** with Slurm job submission scripts for large-scale hyperparameter sweeps
- **Flexible augmentation library** with 13 EEG-specific augmentations across 5 categories
- **Customizable neural architectures** for encoder and classifier components
- **Extensible configuration system** for easy parameter tuning and reproducibility
- **Detailed documentation** and examples for easy onboarding and usage
- **Open-source** under the MIT License
- **Comprehensive logging** with TensorBoard support for training and evaluation metrics
- **Multi-GPU support** for efficient training on large datasets
- **Pretrained models** available for quick start and benchmarking
- **In-depth analysis** of augmentation impact on model performance and latent space quality
- **Visualization tools** for latent space evaluation and model interpretability
- **Support for multiple EEG datasets** with easy integration of new datasets and formats

## Installation

```bash
# Clone the repository
git clone https://gitlab.ethz.ch/shagupta/simplesleepnet.git
cd simplesleepnet

# Create and activate conda environment
conda create -n sleepnet python=3.8
conda activate sleepnet

# Install dependencies
pip install -r requirements.txt
```

## Project Structure

```
simplesleepnet/
├── data/                           # Data directory
│   ├── raw/                        # Raw EEG datasets (.npz/.pkl)
│   ├── processed/                  # Preprocessed per-channel EEG slices
│   └── splits/                     # Train/val/test splits
├── models/                         # Neural network architectures
│   ├── simple_sleep_net.py         # Main encoder architecture
│   └── sleep_stage_classifier.py   # Classifier head for fine-tuning
├── augmentations/                  # EEG-specific augmentations
│   └── data_augmentations.py       # Comprehensive augmentation library
├── evaluation/                     # Evaluation utilities
│   ├── get_predictions.py          # Inference pipeline
│   ├── save_results.py             # Results logging and persistence
│   └── latent_space_evaluator.py   # Embedding quality metrics
├── utils/                          # Utility functions
│   ├── data_loader.py              # Data ingestion pipeline
│   ├── seeding.py                  # Reproducibility utilities
│   ├── tensorboard_logger.py       # Logging infrastructure
│   └── data_utils.py               # Data manipulation helpers
├── contrastive_training.py         # Self-supervised pretraining
├── classifier_training.py          # Supervised fine-tuning
├── main.py                         # End-to-end workflow
├── generate_configs.py             # Experiment configuration generator
├── submit_experiments.sh           # HPC job submission script
├── run_single_experiment.slurm     # Slurm job specification
└── configs/                        # Experiment configurations
    └── config_90.json              # Sample configuration
```

## Quick Start

### Running a Complete Experiment

```bash
# Run a complete experiment pipeline with default settings
python main.py --config configs/config_90.json
```

This will:

1. Load and validate the configuration
2. Prepare datasets and dataloaders
3. Perform contrastive pretraining of the encoder
4. Visualize and evaluate the latent space (if enabled)
5. Train a supervised classifier on top of the frozen encoder
6. Evaluate on the test set and save results

### Step-by-Step Execution

```bash
# 1. Generate experiment configs for a parameter sweep
python generate_configs.py

# 2. Run contrastive pretraining only
python contrastive_training.py --config configs/config_90.json

# 3. Visualize the latent space
python visualize_latent_space.py --config configs/config_90.json

# 4. Train supervised classifier on pretrained encoder
python classifier_training.py --config configs/config_90.json

# 5. Generate predictions and evaluate
python evaluate.py --config configs/config_90.json
```

## Key Components

### 1. Data Augmentations

SimpleSleepNet implements 13 EEG-specific augmentations across 5 categories:

| Category             | Augmentations                                           | Description                                                            |
| -------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Amplitude**        | RandomAmplitudeScaling, RandomDCShift, SignFlip         | Manipulate signal amplitude while preserving frequency characteristics |
| **Frequency**        | RandomBandStopFilter, TailoredMixup                     | Modify frequency components to simulate noise or artifacts             |
| **Masking/Cropping** | CutoutResize, RandomZeroMasking                         | Create temporal discontinuities to enforce invariance                  |
| **Noise/Filtering**  | AverageFiltering, RandomAdditiveGaussianNoise           | Add calibrated noise or smoothing                                      |
| **Temporal**         | TimeReversal, TimeWarping, Permutation, RandomTimeShift | Apply non-linear temporal transformations                              |

![SSLCRL](/assets/images/projects/SSLCRL.png)

Example implementation of `TailoredMixup` augmentation:

```python
class TailoredMixup(BaseAugmentation):
    """
    Frequency-domain mixup that interpolates magnitude and phase spectra separately
    between the original signal and a randomly sampled signal.
    """
    def __init__(self, alpha=0.2, p=1.0):
        super().__init__(p)
        self.alpha = alpha

    def __call__(self, x, x_random=None):
        if not self._should_apply():
            return x

        if x_random is None:
            return x

        # Apply mixup in frequency domain
        x_fft = np.fft.rfft(x)
        x_random_fft = np.fft.rfft(x_random)

        # Separate magnitude and phase
        x_mag, x_phase = np.abs(x_fft), np.angle(x_fft)
        x_random_mag, x_random_phase = np.abs(x_random_fft), np.angle(x_random_fft)

        # Sample mixing coefficients
        lam_mag = np.random.beta(self.alpha, self.alpha)
        lam_phase = np.random.beta(self.alpha, self.alpha)

        # Mix magnitude and phase separately
        mixed_mag = lam_mag * x_mag + (1 - lam_mag) * x_random_mag
        mixed_phase = lam_phase * x_phase + (1 - lam_phase) * x_random_phase

        # Reconstruct signal
        mixed_fft = mixed_mag * np.exp(1j * mixed_phase)
        mixed_signal = np.fft.irfft(mixed_fft, n=len(x))

        return mixed_signal
```

![TailoredMixup](/assets/images/projects/TailoredMixup.png)

### 2. Neural Architectures

#### Encoder: SimpleSleepNet

![Project Demo](/assets/images/projects/Pretraining-picture.png)

```python
class SimpleSleepNet(nn.Module):
    """
    Lightweight 1D CNN encoder for EEG signals with dilated convolutions
    and L2 normalization for contrastive learning.
    """
    def __init__(self, latent_dim=128, dropout=0.3):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Conv1d(1, 32, kernel_size=7, stride=1, padding=3),
            nn.BatchNorm1d(32),
            Mish(),
            nn.Dropout(dropout),

            nn.Conv1d(32, 64, kernel_size=7, stride=1, padding=6, dilation=2),
            nn.BatchNorm1d(64),
            Mish(),
            nn.Dropout(dropout),

            nn.Conv1d(64, 128, kernel_size=7, stride=1, padding=12, dilation=4),
            nn.BatchNorm1d(128),
            Mish(),
            nn.Dropout(dropout),

            nn.AdaptiveAvgPool1d(1),
            nn.Flatten()
        )

        self.projector = nn.Sequential(
            nn.Linear(128, latent_dim),
            nn.BatchNorm1d(latent_dim),
            Mish(),
            nn.Dropout(dropout)
        )

    def forward(self, x):
        h = self.encoder(x)
        z = self.projector(h)
        # L2 normalize embeddings for cosine similarity
        z_norm = F.normalize(z, p=2, dim=1)
        return z_norm
```

![Classifier](/assets/images/projects/Linear-eval.png)

#### Classifier: SleepStageClassifier

```python
class SleepStageClassifier(nn.Module):
    """
    MLP classifier for sleep stage classification using embeddings
    from the pretrained encoder.
    """
    def __init__(self, input_dim=128, num_classes=5, dropout_probs=0.4):
        super().__init__()
        self.classifier = nn.Sequential(
            nn.Linear(input_dim, 256),
            nn.BatchNorm1d(256),
            Mish(),
            nn.Dropout(dropout_probs),

            nn.Linear(256, 128),
            nn.BatchNorm1d(128),
            Mish(),
            nn.Dropout(dropout_probs),

            nn.Linear(128, num_classes)
        )

    def forward(self, x):
        return self.classifier(x)
```

### 3. Contrastive Learning Framework

Our implementation follows the SimCLR paradigm with the NT-Xent loss function:

```python
def nt_xent_loss(embedding_1, embedding_2, temperature=0.5):
    """
    NT-Xent loss for contrastive learning as introduced in SimCLR.

    Args:
        embedding_1: First view embeddings [batch_size, embedding_dim]
        embedding_2: Second view embeddings [batch_size, embedding_dim]
        temperature: Temperature parameter controlling sharpness

    Returns:
        NT-Xent loss value
    """
    # Concatenate embeddings from both views
    embeddings = torch.cat([embedding_1, embedding_2], dim=0)
    batch_size = embedding_1.shape[0]

    # Compute similarity matrix (cosine similarity)
    similarity_matrix = torch.matmul(embeddings, embeddings.T) / temperature

    # Mask out self-similarities
    mask = torch.eye(2 * batch_size, device=embedding_1.device)
    mask = mask.bool()
    similarity_matrix.masked_fill_(mask, -float('inf'))

    # Define positive pairs
    pos_mask = torch.zeros((2 * batch_size, 2 * batch_size), device=embedding_1.device)
    pos_mask[:batch_size, batch_size:] = torch.eye(batch_size)
    pos_mask[batch_size:, :batch_size] = torch.eye(batch_size)
    pos_mask = pos_mask.bool()

    # Get positive similarities
    pos_similarities = similarity_matrix[pos_mask].reshape(2 * batch_size, 1)

    # Compute log-softmax over similarities
    logits = torch.cat([pos_similarities, similarity_matrix], dim=1)
    loss = -torch.nn.LogSoftmax(dim=1)(logits)[:, 0].mean()

    return loss
```

### 4. Configuration System

SimpleSleepNet uses a flexible JSON-based configuration system for experiment reproducibility:

```json
{
  "seed": 42,
  "dataset": {
    "dset_path": "data/processed/",
    "max_files": 100,
    "montage": "Fpz-Cz"
  },
  "pretraining_params": {
    "batch_size": 256,
    "temperature": 0.07,
    "latent_dim": 128,
    "learning_rate": 1e-4,
    "max_epochs": 200,
    "check_interval": 20,
    "min_improvement": 0.01
  },
  "augmentations": {
    "RandomZeroMasking": {
      "masking_ratio": 0.1,
      "p": 0.8
    },
    "TimeWarping": {
      "sigma": 0.1,
      "knot_points": 5,
      "p": 0.7
    },
    "TailoredMixup": {
      "alpha": 0.2,
      "p": 0.5
    },
    "RandomAdditiveGaussianNoise": {
      "scale": 0.1,
      "p": 0.5
    }
  },
  "latent_space_params": {
    "tsne_enabled": true,
    "umap_enabled": true,
    "n_clusters": 5,
    "visualization_fraction": 0.5
  },
  "sup_training_params": {
    "dropout_rate": 0.4,
    "learning_rate": 1e-3,
    "max_epochs": 100
  },
  "experiment_num": 90
}
```

## Training Pipeline

### 1. Self-Supervised Contrastive Pretraining

```python
# Load augmentations from config
augmentations = load_augmentations_from_config(config)

# Create datasets and dataloaders
train_dataset = ContrastiveEEGDataset(eeg_signals, augmentations)
train_loader = DataLoader(train_dataset, batch_size=config['pretraining_params']['batch_size'])

# Create model and optimizer
model = SimpleSleepNet(latent_dim=config['pretraining_params']['latent_dim'])
optimizer = Adam(model.parameters(), lr=config['pretraining_params']['learning_rate'])

# Train contrastive model
train_contrastive_model(
    model=model,
    train_dataloader=train_loader,
    optimizer=optimizer,
    temperature=config['pretraining_params']['temperature'],
    num_epochs=config['pretraining_params']['max_epochs'],
    check_interval=config['pretraining_params']['check_interval'],
    min_improvement=config['pretraining_params']['min_improvement'],
    device='cuda' if torch.cuda.is_available() else 'cpu',
    best_model_path=f"checkpoints/encoder_{config['experiment_num']}.pth"
)
```

### 2. Supervised Fine-Tuning

```python
# Load pretrained encoder
encoder = SimpleSleepNet(latent_dim=config['pretraining_params']['latent_dim'])
encoder.load_state_dict(torch.load(f"checkpoints/encoder_{config['experiment_num']}.pth"))
encoder.eval()  # Freeze encoder

# Create supervised dataset and dataloader
train_dataset = SupervisedEEGDataset(eeg_signals)
train_loader = DataLoader(train_dataset, batch_size=config['sup_training_params']['batch_size'])

# Create classifier and optimizer
classifier = SleepStageClassifier(
    input_dim=config['pretraining_params']['latent_dim'],
    num_classes=5,
    dropout_probs=config['sup_training_params']['dropout_rate']
)
optimizer = Adam(classifier.parameters(), lr=config['sup_training_params']['learning_rate'])
criterion = nn.CrossEntropyLoss()

# Train classifier
train_classifier(
    encoder=encoder,
    classifier=classifier,
    train_dataloader=train_loader,
    criterion=criterion,
    optimizer=optimizer,
    num_epochs=config['sup_training_params']['max_epochs'],
    device='cuda' if torch.cuda.is_available() else 'cpu',
    save_path=f"checkpoints/classifier_{config['experiment_num']}.pth"
)
```

## HPC Deployment

For large-scale experimentation, we provide scripts for running on HPC clusters with Slurm:

```bash
# Generate multiple configs for a hyperparameter sweep
python generate_configs.py --grid "latent_dim=64,128,256" --seeds "0,1,2" \
                          --out configs/sweep/

# Submit all experiments to Slurm
bash submit_experiments.sh configs/sweep/
```

The Slurm job script (`run_single_experiment.slurm`) handles resource allocation and environment setup:

```bash
#!/bin/bash
#SBATCH --job-name=SleepNet
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=8
#SBATCH --mem-per-cpu=4G
#SBATCH --time=12:00:00
#SBATCH --gpus=1
#SBATCH --mail-type=END,FAIL
#SBATCH --mail-user=your.email@example.com
#SBATCH --output=logs/SleepNet_Run_%j.out
#SBATCH --error=logs/SleepNet_Run_%j.err

# Set up environment
source /path/to/conda/bin/activate
conda activate sleepnet

# Ensure project directory is properly set
PROJECT_DIR=$(dirname $(readlink -f $0))

# Run the experiment with the config file passed from submit_experiments.sh
python $PROJECT_DIR/main.py --config "$CONFIG_FILE"

# Exit with the same code as the Python script
exit $?
```

## Experimental Results

Our systematic evaluation of EEG augmentations reveals several key findings:

1. **Top-performing augmentations:**

   - **Masking-Cropping**: RandomZeroMasking, CutoutResize
   - **Frequency-Based**: TailoredMixup
   - **Temporal**: TimeWarping, Permutation

2. **Augmentation severity analysis:** Applying 3-4 well-chosen augmentations provides optimal balance between under- and over-distortion.

3. **Performance metrics:**

   - **Linear Evaluation**: ~75% accuracy, ~65% Macro-F1
   - **Fine-tuned Evaluation**: >80% accuracy, >70% Macro-F1

4. **Latent space quality:** Our contrastive pretraining produces well-separated clusters that align with sleep stage labels, as evidenced by high Adjusted Rand Index (ARI) scores.

![Evaluation](/assets/images/projects/confusion_matrix_49.png)

## Extending SimpleSleepNet

### Adding New Augmentations

Create a new augmentation by inheriting from the `BaseAugmentation` class:

```python
class MyCustomAugmentation(BaseAugmentation):
    def __init__(self, param1=0.5, param2=1.0, p=1.0):
        super().__init__(p)
        self.param1 = param1
        self.param2 = param2

    def __call__(self, x, x_random=None):
        if not self._should_apply():
            return x

        # Implement your augmentation logic here
        augmented_x = ...

        return augmented_x
```

Then add it to your configuration:

```json
"augmentations": {
  "MyCustomAugmentation": {
    "param1": 0.7,
    "param2": 2.0,
    "p": 0.8
  }
}
```

### Adding New Model Architectures

Create a new encoder by implementing the required interface:

```python
class MyCustomEncoder(nn.Module):
    def __init__(self, latent_dim=128):
        super().__init__()
        # Define your architecture

    def forward(self, x):
        # Process input and produce embeddings
        # Make sure to normalize output for contrastive learning
        return F.normalize(embeddings, p=2, dim=1)
```

## Citation

If you use SimpleSleepNet in your research, please cite:

```bibtex
@misc{gupta2025selfsupervised,
  title={Self-Supervised Contrastive Learning for EEG-Based Sleep Stage Classification},
  author={Gupta, Shaswat},
  year={2025},
  publisher={ETH Zurich},
  howpublished={\url{https://gitlab.ethz.ch/shagupta/simplesleepnet}}
}
```

## License

This project is licensed under the [MIT License](/assets/files/MIT_License.md).

## Acknowledgments

This work was conducted as part of a semester project at the [Medical Data Science Group](https://mds.inf.ethz.ch/), D-INFK, ETH Zurich, under the supervision of [Prof. Dr. Julia Vogt](https://mds.inf.ethz.ch/team/detail/julia-vogt).

<div class="page__download" style="text-align:center; margin: 2em 0;">
  <a href="https://gitlab.ethz.ch/shagupta/simplesleepnet" class="btn btn--primary" target="_blank" rel="noopener">
    <i class="fab fa-github"></i> View on GitLab
  </a>
</div>

<div class="page__download" style="text-align:center; margin: 2em 0;">
  <a href="/assets/files/SimpleSleepNet-Report.pdf" class="btn btn--primary" download>
    <i class="fas fa-file-pdf"></i> Download Full Report (PDF)
  </a>
</div>
