
SHELL_PATH = /bin/ash
SHELL = $(if $(wildcard $(SHELL_PATH)),/bin/ash,/bin/bash)


dev-up:
	docker compose -f ./zarf/docker-compose.yml up -d

dev-down:
	docker compose -f ./zarf/docker-compose.yml down
