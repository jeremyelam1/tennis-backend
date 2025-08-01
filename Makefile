
SHELL_PATH = /bin/ash
SHELL = $(if $(wildcard $(SHELL_PATH)),/bin/ash,/bin/bash)


dev-up:
	docker compose up -d

dev-down:
	docker compose down
