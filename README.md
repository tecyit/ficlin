# Migrating cloud to local

## Create migration

hasura migrate create init --sql-from-server --endpoint https://dev-ficlin.hasura.app --admin-secret apWn2VzJgB9SPAoouFEe9dzMnegQ3Vm3IlT1kBqOWmJxCBbFQcNJn6peO39sAxe1

## Apply migration to cloud skipping the ones done

hasura migrate apply --endpoint https://dev-ficlin.hasura.app --admin-secret apWn2VzJgB9SPAoouFEe9dzMnegQ3Vm3IlT1kBqOWmJxCBbFQcNJn6peO39sAxe1 --skip-execution --version 1634655413416

## Export metadata

hasura metadata export --endpoint https://dev-ficlin.hasura.app --admin-secret apWn2VzJgB9SPAoouFEe9dzMnegQ3Vm3IlT1kBqOWmJxCBbFQcNJn6peO39sAxe1

## Run docker

docker-compose up -d

- Open localhost:8080

(you may need to rename the db before apply metadata on local hasura console)

## Apply metadata

hasura metadata apply --admin-secret myadminsecretkey

## Apply migrations

hasura migrations apply --admin-secret myadminsecretkey

## Reload metadata

hasura metadata reload --admin-secret myadminsecretkey
