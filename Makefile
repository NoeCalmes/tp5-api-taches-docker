up:
	docker-compose up --build

down:
	docker-compose down

logs:
	docker-compose logs -f

ps:
	docker-compose ps

restart:
	docker-compose down && docker-compose up --build

lint:
	npm run lint

lint-fix:
	npm run lint:fix

test:
	npm test

check: lint test 