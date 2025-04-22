---
title: "DeepSleepBench"
excerpt: "Benchmarking Neural Latent Representations on EEG data for Sleep Stage Classification"
header:
  teaser: /assets/images/projects/latent.jpg
---
![DeepSleepBench Framework](/assets/images/projects/bench-framework-diagram.svg)

# Benchmarking Neural Latent Representations for EEG-based Sleep Stage Classification

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![PyTorch 2.0+](https://img.shields.io/badge/PyTorch-2.0.0+-red.svg)](https://pytorch.org/)
[![TensorBoard](https://img.shields.io/badge/TensorBoard-Enabled-green.svg)](https://www.tensorflow.org/tensorboard)

## Overview

Sleep stage classification (SSC) is fundamental for diagnosing sleep disorders and understanding sleep physiology. However, the effectiveness of self-supervised learning (SSL) paradigms for electroencephalogram (EEG) data remains incompletely explored. DeepSleepBench provides a systematic benchmark of three SSL paradigms paired with different neural architectures for EEG-based SSC.



<div class="page__download" style="text-align:center; margin: 2em 0;">
  <a href="https://github.com/RaphaelKreft/DeepLearningProject" class="btn btn--primary" target="_blank" rel="noopener">
    <i class="fab fa-github"></i> View on GitHub
  </a>
</div>

<div class="page__download" style="text-align:center; margin: 2em 0;">
  <a href="/assets/files/benchmarking_neural_representations.pdf" class="btn btn--primary" download>
    <i class="fas fa-file-pdf"></i> Download Full Report (PDF)
  </a>
</div>

**Our contribution:**
- Comprehensive evaluation of SSL paradigms (Contrastive, Masked Prediction, Hybrid) 
- Ablation studies across neural architectures (CNN, CNN+Attention, Transformer)
- Novel metrics for latent space quality assessment
- State-of-the-art performance on public sleep datasets

## Key Results

| Model/Paradigm | Architecture | Accuracy (%) | Macro-F1 | Cohen's κ |
|----------------|--------------|-------------|----------|-----------|
| CRL            | CNN          | 76.9        | 66.1     | 0.670     |
| CRL            | CNN+Attn     | **79.8**    | **69.2** | **0.715** |
| CRL            | Transformer  | 49.5        | 29.4     | 0.265     |
| MP             | CNN          | 63.9        | 50.8     | 0.486     |
| MP             | CNN+Attn     | 69.0        | 53.9     | 0.552     |
| MP             | Transformer  | 62.5        | 48.4     | 0.462     |
| Hybrid         | CNN          | 78.8        | 68.7     | 0.700     |
| Hybrid         | CNN+Attn     | 78.9        | 67.7     | 0.702     |
| Hybrid         | Transformer  | 56.4        | 41.6     | 0.374     |

Our findings reveal that **CNN+Attention with Contrastive Learning** achieves superior performance, while hybrid approaches provide a balanced alternative for EEG-based sleep staging.

![Latent Space](/assets/images/projects/latent_space.png)

## Installation

### Prerequisites
- CUDA-compatible GPU (tested on NVIDIA RTX 3090)
- Python 3.8+
- PyTorch 2.0+

### Option 1: Using Conda (Recommended)

```bash
# Clone the repository
git clone https://github.com/YourUsername/DeepSleepBench.git
cd DeepSleepBench

# Create and activate conda environment
conda env create -f sleepnet_environment.yaml
conda activate sleepnet
```

### Option 2: Using pip

```bash
# Clone the repository
git clone https://github.com/YourUsername/DeepSleepBench.git
cd DeepSleepBench

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install PyTorch (adjust according to your CUDA version)
pip install torch==2.0.0 torchvision==0.15.0 torchaudio==2.0.0 --index-url https://download.pytorch.org/whl/cu118

# Install other dependencies
pip install -r requirements.txt
```

## Dataset Preparation

### Sleep-EDF Dataset

```bash
# Download the Sleep-EDF-2018 dataset
cd ./dset/Sleep-EDF-2018
python download_sleep-edf-2018.py

# Preprocess EDF files into NPZ format
python prepare_sleep-edf-2018.py
```

## Framework Architecture

DeepSleepBench evaluates three distinct backbone architectures:

### 1. CNN Backbone
```
Conv-Block ×5 → Feature Pyramid (c3,c4,c5)
               ↘                     ↘
            AvgPool1d(1)         Decoder (mirror arch)
               ↘                     ↘
            128-D latent      Reconstruction (for MP)
```

### 2. CNN+Attention Backbone
Extends the CNN architecture with transformer-style attention mechanisms for capturing long-range temporal dependencies:
- Self-attention blocks after the last two encoder/decoder stages
- Multi-head attention with add & norm operations
- Same latent head dimensionality (128-D) for fair comparison

### 3. Transformer Backbone
Two-stage pipeline for handling EEG signals:
1. Optional `SignalBackbone`: Tri-branch ResNet-style feature extractor for 5s signal windows
2. `AutoEncoderViT`: Vision Transformer with masked auto-encoder capability
   - Linear patch projection
   - Sinusoidal positional embeddings
   - CLS token for classification

## Self-Supervised Learning Paradigms

DeepSleepBench evaluates three SSL paradigms:

### 1. Contrastive Representation Learning (CRL)
Trains the encoder to discriminate between different instances while pulling together augmented views of the same epoch.

```bash
# Run CRL pre-training with CNN+Attention backbone
python train_crl_dlproj.py --config configs/DLPROJ_pretrain_CRL_CNN_Attention_Sleep-EDF-2018.json --gpu 0
```

### 2. Masked Prediction (MP)
Reconstructs masked portions of the input signal, forcing the model to learn temporal dependencies.

```bash
# Run MP pre-training with Transformer backbone
python train_mp.py --config configs/DLPROJ_pretrain_MP_Transformer_Sleep-EDF-2018.json --gpu 0
```

### 3. Hybrid Approach (CRL + MP)
Combines both objectives to leverage complementary learning signals.

```bash
# Run Hybrid pre-training with CNN backbone
python train_hybrid.py --config configs/DLPROJ_pretrain_Hybrid_CNN_Sleep-EDF-2018.json --gpu 0
```

## Latent Space Evaluation

Our framework includes comprehensive tools for evaluating latent space quality:

```bash
# Evaluate embeddings from a pre-trained model
python latent_space_evaluator.py --config configs/DLPROJ_pretrain_CRL_CNN_Sleep-EDF-2018.json
```

### Supported Metrics

#### Cluster Quality Metrics
- **Silhouette Score** ↑: Measures how similar points are to their own cluster vs. other clusters
- **Davies-Bouldin Index** ↓: Ratio of within-cluster distances to between-cluster distances
- **Purity** ↑: Proportion of cluster members belonging to the dominant class
- **Average Entropy** ↓: Information theory measure of cluster label homogeneity

#### Label-Aware Metrics
- **Adjusted Rand Index** ↑: Corrected-for-chance measure of cluster-label agreement
- **Adjusted Mutual Information** ↑: Normalized measure of shared information

#### Topology & Geometry Metrics
- **Trustworthiness** ↑: Preservation of local neighborhoods after dimensionality reduction
- **Alignment** ↑: Correlation between original and reduced distance matrices
- **Compactness-to-Separation Ratio** ↓: Balance between intra-class and inter-class distances

### Visualization Methods
- **t-SNE**: Non-linear dimensionality reduction preserving local structure
- **UMAP**: Manifold learning algorithm balancing local and global structure
- **PCA**: Linear baseline for sanity checks

Sample visualization of latent spaces for different model architectures:

![Latent Space Visualization](assets/latent_visualization.png)

## Advanced Usage

### Configuration System

DeepSleepBench uses a flexible JSON/YAML configuration system for experiment customization:

```json
{
  "exp_name": "CRL_CNN_Sleep-EDF-2018",
  "backbone": {
    "type": "CNN",
    "params": {
      "in_channels": 1,
      "initial_filters": 16,
      "kernel_size": 3,
      "dropout": 0.5
    }
  },
  "trainer": {
    "batch_size": 128,
    "learning_rate": 0.001,
    "weight_decay": 0.0001,
    "max_epochs": 500,
    "early_stopping_patience": 10
  },
  "data": {
    "dataset": "Sleep-EDF-2018",
    "sampling_rate": 100,
    "epoch_duration": 30
  },
  "ssl": {
    "type": "CRL",
    "params": {
      "temperature": 0.1,
      "augmentations": [
        "RandomBandStopFilter",
        "RandomTimeShift",
        "RandomZeroMasking",
        "TimeWarping",
        "Permutation",
        "CutoutResize"
      ]
    }
  }
}
```

### Data Augmentation Suite

Our framework includes six specialized signal augmentations:

1. **RandomBandStopFilter**: Removes random frequency bands
2. **RandomTimeShift**: Applies temporal shifts with random offsets
3. **RandomZeroMasking**: Masks random segments with zeros
4. **TimeWarping**: Non-uniformly stretches/compresses segments
5. **Permutation**: Divides and reorders signal segments
6. **CutoutResize**: Removes segments and resizes remaining parts

Each augmentation is applied with probability 0.5 to ensure sufficient distortion while preserving essential information.

### Custom Training Recipes

#### Hybrid Training Balance Tuning
```json
"alpha_crl": 10  // Adjust weight between CRL and MP objectives
```

#### Masking Difficulty Control
```json
"masking_ratio": 0.50  // Hide 50% of signal (higher = harder)
```

#### Faster Experimentation
```json
"val_period": 128,  // Validate every 128 mini-batches
"early_stopping": { "patience": 3 },
"max_epochs": 100
```

## Code Structure

```
DeepSleepBench/
├── configs/                  # Training configuration files
├── dset/                     # Dataset download and preprocessing
├── models/                   # Model architectures
│   ├── cnn/                  # CNN backbone implementation
│   ├── cnn_attention/        # CNN+Attention backbone 
│   ├── transformer/          # Transformer backbone
│   └── main_model_dlproj.py  # Model factory and integration
├── latent_space_evaluation/  # Latent space metrics and viz tools
│   ├── reducers.py           # t-SNE, UMAP, PCA dimensionality reduction
│   ├── metrics.py            # 13 cluster quality metrics
│   ├── plotter.py            # Visualization utilities
│   └── test_script.py        # CLI for evaluation
├── train_crl_dlproj.py       # Contrastive learning training
├── train_mp.py               # Masked prediction training
├── train_hybrid.py           # Hybrid approach training
├── loss.py                   # Loss function implementations
├── utils.py                  # Utility functions
├── requirements.txt          # pip dependencies
└── sleepnet_environment.yaml # Conda environment specification
```

## Training Pipeline

Our training pipeline follows a standardized workflow:

1. **Self-supervised pre-training**:
   ```bash
   python train_crl_dlproj.py --config configs/DLPROJ_pretrain_CRL_CNN_Attention_Sleep-EDF-2018.json --gpu 0
   ```

2. **Automatic embedding generation**:
   The framework automatically generates embeddings for evaluation after pre-training.

3. **Linear evaluation**:
   ```bash
   # Automatically performed after pre-training
   # Or run separately:
   python classifier_training.py --encoder_ckpt ckpts/cnn_pretrain.pt --config configs/classifier_cnn.json
   ```

4. **Benchmarking**:
   ```bash
   # For comprehensive latent space evaluation
   python latent_space_evaluator.py --config configs/DLPROJ_pretrain_CRL_CNN_Sleep-EDF-2018.json
   ```

## Monitoring & Artifacts

- **TensorBoard logs**: Available at `logs/<config-name>/fold-1/`
- **Checkpoints**: Saved to `checkpoints/<config-name>/ckpt_fold-01.pth`
- **Embeddings**: Dumped to `checkpoints/<config-name>/embeddings.pt`
- **Visualizations**: Generated in `results/<config-name>/`

To view TensorBoard logs:
```bash
tensorboard --logdir logs/
```

## Troubleshooting

### Common Issues

#### Out-of-Memory Errors
- Reduce batch size in configuration
- Use PyTorch 2.0+ for improved memory efficiency
- For Transformer models, consider reducing attention heads

#### Training Instability
- For CRL, ensure batch size ≥ 128 for stable contrastive gradients
- Adjust temperature parameter (start with 0.1, increase if unstable)
- Start with lower learning rates for Transformer models

#### Missing Masking Errors
For Hybrid/MP training, ensure:
```json
"masking": true
```
is set in the dataset configuration block.

## Future Work

- Extension to multi-channel EEG classification
- Cross-dataset domain adaptation
- Integration with additional sleep datasets (MASS, SHHS)
- Advanced transformer architectures with EEG-specific adaptations
- Real-time inference optimizations for clinical deployment

## Acknowledgments

This project builds upon several excellent works in the field of sleep stage classification:

- SleePyCo ([Lee et al., 2024](https://doi.org/10.1016/j.eswa.2023.122551))
- MAEEG ([Chien et al., 2022](https://arxiv.org/abs/2211.02625))
- NeuroNet ([Lee et al., 2024](https://arxiv.org/abs/2404.17585))

We thank the authors of these papers for making their research accessible.

## License

This project is licensed under the MIT License - see the LICENSE file for details.