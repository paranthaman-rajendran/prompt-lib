# Sample Prompts Package

A collection of reusable prompts in Markdown format.

## Installation

To install the package, run:

```bash
pip install -e .## Usage
```

To use the prompts, import them in your Python code:

```python
from prompts import get_prompt

prompt = get_prompt("your_prompt_name")
# or
prompt = get_prompt("your_prompt_name", language="en")
```

## Contributing

Contributions are welcome! Please submit a pull request with your changes.

# Sample Prompts Package

```
# Sample Prompts Package
```

# REST API Security Review Prompts

A collection of AI prompts for conducting REST API security reviews.

## Usage

```js
const { securityReviewPrompt } = require("rest-api-security-prompts");

// Use the prompt with your AI assistant
```

## Available Prompts

- `securityReviewPrompt` - Comprehensive REST API security review checklist

# publish sub modules

```
    git status
    git add .
    git commit -m "Committing changes before running Lerna"
    git push origin main
    npx lerna publish
```
