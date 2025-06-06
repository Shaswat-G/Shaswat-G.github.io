---
title: "PyRecover"
excerpt: "Robust distributed checkpointing and job management for multi-GPU SLURM workloads. Efficient, time-aware, and fault-tolerant training."
sidebar:
  nav: "PyRecover"
toc: true
toc_sticky: true
header:
  teaser: /assets/images/projects/hpc.jpg 
# SEO meta
description: "PyRecover: Distributed checkpointing and job management for SLURM-based multi-GPU workloads. Time-aware, efficient, and robust for large-scale deep learning."
author: "Shaswat Gupta"
image: /assets/images/projects/pyrecover.jpg
keywords:
  [
    "PyRecover",
    "Distributed Checkpointing",
    "SLURM",
    "Multi-GPU",
    "Job Management",
    "Deep Learning",
    "Fault Tolerance",
    "Time-Aware Training",
    "Cluster Computing",
    "AI Infrastructure",
    "Python",
    "Open Source",
  ]
---

![Project Demo](/assets/images/projects/pyrecover.png)

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue)](https://www.python.org/){:target="_blank" rel="noopener"}
![License](https://img.shields.io/badge/License-MIT-green)
[![SLURM](https://img.shields.io/badge/SLURM-Compatible-green)](https://slurm.schedmd.com/){:target="_blank" rel="noopener"}
[![Distributed](https://img.shields.io/badge/Distributed-MultiGPU-blue)](https://pytorch.org/docs/stable/notes/ddp.html){:target="_blank" rel="noopener"}

**Author:** Shaswat Gupta  
**Contact:** [Email](/contact/)  
**Project Repository:** [PyRecover](https://github.com/Shaswat-G/PyRecover){:target="_blank" rel="noopener"}

[**Download Full Report (PDF)**](/assets/files/PyRecover-Report.pdf)

## Overview

PyRecover is a robust distributed checkpointing and job management system for multi-GPU SLURM workloads. It enables efficient, time-aware checkpointing to maximize cluster utilization and prevent loss of training progress.

[View on GitHub](https://github.com/Shaswat-G/PyRecover){:target="_blank" rel="noopener"}

## Key Features

- **Distributed checkpointing** for large models and multi-GPU jobs
- **Time-aware job management** to avoid job preemption and maximize resource usage
- **Seamless SLURM integration** for easy deployment on HPC clusters
- **Fault-tolerant training** with automatic resume from latest checkpoint
- **Support for Flash Attention** and other advanced optimizations
- **Flexible configuration** for both single-node and multi-node jobs
- **Comprehensive benchmarking** and loss convergence tracking
- **Open-source** under the MIT License

## Installation

```bash
# Clone the repository
git clone https://github.com/Shaswat-G/PyRecover
cd pyrecover

# Create and activate conda environment
conda env create -f env.yml
conda activate pyrecover
```

### Installation with Flash Attention

Ensure CUDA toolkit, C++ compiler, and Python dev headers are installed. Then:

```bash
./setup_flashattention.sh
# or
pip install ".[flash-attention]"
```

## Project Structure

```text
pyrecover/
├── train.py                      # Main training script
├── env.yml                       # Conda environment file
├── submit-training-simple.sh     # SLURM submission script
├── setup_flashattention.sh       # Flash Attention setup
├── tests/                        # Benchmark and test scripts
│   └── check_weights_equality.py # Checkpoint equality checker
├── ...                           # Other modules and utilities
```

## Quick Start

### Non-distributed Training

```bash
sbatch submit-training-simple.sh --exp_name=my_experiment
```

### Distributed Training

```bash
sbatch submit-training-simple.sh --distributed --exp_name=distributed_exp
```

### Resume from Checkpoint

```bash
sbatch submit-training-simple.sh --distributed --continue --use_torch_distributed_ckpt
```

## Command Line Arguments

The training script (`train.py`) accepts various arguments:

| Argument                       | Description                                   | Default                                                         |
| ------------------------------ | --------------------------------------------- | --------------------------------------------------------------- |
| `--dataset`                    | Path to parquet file with text data           | `/capstor/store/cscs/ethz/large-sc/datasets/train_data.parquet` |
| `--sequence-length`            | Maximum sequence length                       | 2048                                                            |
| `--batch-size`                 | Batch size per GPU                            | 1                                                               |
| `--learning-rate`              | Learning rate                                 | 1e-5                                                            |
| `--training-steps`             | Number of training steps                      | 1000                                                            |
| `--distributed`                | Enable distributed training                   | False                                                           |
| `--model-dtype`                | Model precision (fp16/bf16/fp32/fp64)         | "bf16"                                                          |
| `--checkpoint-dir`             | Directory for checkpoints                     | "checkpoints/"                                                  |
| `--checkpoint-frequency`       | Save checkpoint every N steps                 | 10                                                              |
| `--resume-from-checkpoint`     | Path to checkpoint or "latest"                | None                                                            |
| `--profile`                    | activates profiling support for nsys          | False                                                           |
| `--experiment_name`            | Name of experiment (for checkpoint subfolder) | "default-exp"                                                   |
| `--use-torch-distributed-ckpt` | Use distributed checkpointing                 | False                                                           |
| `--compile`                    | Compile model with torch.compile              | False                                                           |
| `--fused-optimizer`            | Use fused optimizer                           | False                                                           |
| `--use_flash_attention`        | Use flash-attention in the model              | False                                                           |
| `--log-loss-to-csv`            | Log loss to a csv for plots/comparison        | False                                                           |
| `--timeaware-checkpointing`    | Activates time aware checkpointing            | False                                                           |

For a complete list, run:

```bash
python train.py --help
```

## SLURM Submission Script

The script `submit-training-simple.sh` launches jobs on SLURM clusters. Key parameters:

| SLURM Parameter     | Description                          |
| ------------------- | ------------------------------------ |
| `--nodes`           | Number of nodes to allocate          |
| `--ntasks-per-node` | Tasks per node (typically 1 per GPU) |
| `--gpus-per-node`   | GPUs to use per node                 |
| `--time`            | Time limit for the job               |
| `--partition`       | SLURM partition to use               |

## Checkpointing

- **Vanilla Checkpointing**: Standard PyTorch checkpointing (default)
- **Distributed Checkpointing**: Faster for large models (enable with `--use_torch_distributed_ckpt`)
- **Time-Aware Checkpointing**: Add `--timeaware-checkpointing` to auto-save before walltime ends

## Benchmarks

- **Check equality of weights**: `python check_weights_equality.py <checkpoint1> <checkpoint2> [--distributed] [--tolerance 1e-7] [--verbose]`
- **Loss convergence**: Add `--log-loss-to-csv` to log step-wise loss for analysis

## License

This project is licensed under the [MIT License](/assets/files/MIT_License.md).

## Acknowledgments

Developed at ETH Zurich for robust, large-scale deep learning on HPC clusters.

[View on GitHub](https://github.com/Shaswat-G/PyRecover){:target="_blank" rel="noopener"}
