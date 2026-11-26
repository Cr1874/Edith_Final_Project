# Edith Final Project

Repository for my final year project.

Edith is a web application that helps a finance reviewer check supplier invoices against their purchase orders. A reviewer uploads an invoice PDF, a locally hosted language model suggests the key fields, the reviewer confirms or corrects them, and Edith compares the confirmed invoice with the purchase order and highlights anything that doesn't match.

## Why I'm building it

Checking invoices against purchase orders by hand is slow and repetitive, and small mismatches are easy to miss: a wrong PO reference, a different total or the wrong currency. Commercial tools exist for this, but they are expensive and send documents to the cloud.

Edith aims to provide a cheaper, more secure approach:

- **The AI suggests and a person decides.** The model never approves anything. Every extracted value is shown to a reviewer, who confirms or corrects it.
- **Comparisons are deterministic.** Totals, currencies and PO references are compared with plain TypeScript rules, not by the model, so every decision can be explained and tested.

## Current status

- NestJS backend with initial PostgreSQL setup
- List reviews, and get and update a single review, with input validation
- Angular frontend with a reviews page that loads reviews from the API

## Tech stack

| Area          | Technology                                   |
| ------------- | -------------------------------------------- |
| Frontend      | Angular, TypeScript                          |
| Backend       | NestJS, TypeORM                              |
| Database      | PostgreSQL                                   |
| AI (planned)  | A locally run open-weight model              |
| Testing       | Vitest, Bruno (API requests in `api-tests/`) |

## Repository layout

```text
backend/     NestJS API
frontend/    Angular app
api-tests/   Bruno requests for trying the API
```

## API (so far)

| Method  | Endpoint       | Description                                                       |
| ------- | -------------- | ----------------------------------------------------------------- |
| `GET`   | `/reviews`     | List all reviews                                                  |
| `GET`   | `/reviews/:id` | Get one review                                                    |
| `PATCH` | `/reviews/:id` | Update a review's PO number and status (`PENDING` or `IN_REVIEW`) |

## Data

Edith is developed and tested with synthetic invoices and purchase orders only. No real supplier, customer or personal data is used.

This repository is part of assessed work.
