# Example app for CI Hexlet course

[![CI](https://github.com/hexlet-components/hexlet-ci-app/actions/workflows/main.yml/badge.svg?branch=final)](https://github.com/hexlet-components/hexlet-ci-app/actions/workflows/main.yml?query=branch%3Afinal)

Starting boilerplate of [Strapi](https://strapi.io/) application

## Зачем это нужно

Подопытное приложение для курса по непрерывной интеграции. Само по себе оно неинтересно: это заготовка [Strapi](https://strapi.io/), и её задача просто собираться и проходить тесты.

Ценность в обвязке вокруг: на этом репозитории настраивают пайплайн, учатся читать красный CI и чинить сборку.

## System requirements

- NodeJS >= 26
- pnpm 12 (точная версия указана в packageManager файла package.json)
- [mise](https://mise.jdx.dev/getting-started.html)

## Using

```sh
mise trust
mise install
mise run setup
mise run start
```

`mise.toml` задаёт версии инструментов и команды проекта. Задача `setup` устанавливает зависимости из `pnpm-lock.yaml` и собирает приложение. Локально и в GitHub Actions используются одинаковые задачи.

## Run tests

```sh
mise run test
```

После запуска тестов файл `reports/test-results.xml` содержит JUnit-отчёт. Он создаётся и при падении проверки в тесте. Логи установки и сборки нужно искать в выводе соответствующего шага, если тесты ещё не запускались.

## Run linter

```sh
mise run lint
```

---

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=hexlet-ci-app)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=hexlet-ci-app).
