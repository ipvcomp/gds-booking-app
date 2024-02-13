.DEFAULT_GOAL := help

# All devstack targets are "PHONY" in that they do not name actual files.
# Thus, all non-parameterized targets should be added to this declaration.
.PHONY: help provision build up logs attach shell stop requirements upgrade

# Generates a help message. Borrowed from https://github.com/pydanny/cookiecutter-djangopackage.
help: ## Display this help message.
	@echo "Please use \`make <target>' where <target> is one of"
	@awk -F ':.*?## ' '/^[a-zA-Z]/ && NF==2 {printf "\033[36m  %-28s\033[0m %s\n", $$1, $$2}' Makefile | sort

build:
	docker build -t flights-api .
