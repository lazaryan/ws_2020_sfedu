# World Sckills 2020 - SFEDU

Репозиторий для стартового шаблона для соревнований по блокчейну

## OC

- windows 10

## Программы

- Node.js (v 12.18.4)
- python 3 (v 3.8.5)
- Firefox
- VS Code
- PyCharm
- geth (v 1.9.21 (19.41 MB))
- Ganache
- Microsoft Office

## Плагины для VS Code

- solidity

## Глобальные Python пакеты

- rpc
- web3

## Необходимые JS глобальные пакеты

- truffle
- web3

Для установки пакета глобавльно нужно выполнить команду `npm install -g <package_name_1> <package_name_2>...`

## Установка

```bash
> npm install
```

# Документация

- [solidity](https://solidity.readthedocs.io/_/downloads/en/latest/pdf/)
- [web3](https://web3js.readthedocs.io/_/downloads/en/v2.0.0-alpha.1/pdf/)
- [express](https://expressjs.com/ru/4x/api.html)
- [статья по разворачиванию geth](https://habr.com/ru/post/312008/)
- [crypto-js](https://cryptojs.gitbook.io/docs/#documentation)
- [solc](https://github.com/ethereum/solc-js/blob/master/README.md)

## Node.js команды шаблона:

- `npm run day_1`: запуск скриптов для первого дня
- `npm run day_1 -- --task=<task_name>`: запуск конкретной задачи для первого дня
- `npm run day_2:server -- --app=<component_name>`: Запуск dev режима разработки фронта для второго дня
- `npm run day_2:dev`: Быстрый билд фронта для второго дня