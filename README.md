# NoticeConnect

# Project Information

Created by Shannon Birch

I would appreciate any feedback that's willing to be provided. 

### Next Project Steps
Were I spending more time on the project, my next steps would be:
 - Spend more time refining the design of the frontend to be more aethetically pleasing and user friendly
 - Create pages for individual users and transactions beyond the django page
 - Write the following tests:
 - - Test that data inputs are valid
 - - Create a unit test that verifies that the total is correct for the transactions based off Product price
### Notes
I created tabs for Firms and Products for ease of adding them to the database. If you'd like to add data not in the loaddata file, please view them by changing the comment in router.js.

The project uses  [Gui Talarico's DJango-vue-template as a base](https://github.com/gtalarico/django-vue-template)
 
### Structure


| Location             |  Content                                   |
|----------------------|--------------------------------------------|
| `/backend`           | Django Project & Backend Config            |
| `/backend/api`       | Django App (`/api`)                        |
| `/src`               | Vue App .                                  |
| `/src/main.js`       | JS Application Entry Point                 |
| `/public/index.html` | [Html Application Entry Point](https://cli.vuejs.org/guide/html-and-static-assets.html) (`/`)         |
| `/public/static`     | Static Assets                              |
| `/dist/`             | Bundled Assets Output (generated at `yarn build`) |

## Prerequisites

Before getting started you should have the following installed and running:

- [X] Yarn - [instructions](https://yarnpkg.com/en/docs/install)
- [X] Vue CLI 3 - [instructions](https://cli.vuejs.org/guide/installation.html)
- [X] Python 3 - [instructions](https://wiki.python.org/moin/BeginnersGuide)
- [X] Pipenv - [instructions](https://pipenv.readthedocs.io/en/latest/install/#installing-pipenv)

## Setup Template

```
$ git clone https://github.com/ShannonBirch/notice-connect
$ cd notice-connect
```

Setup
```
$ yarn install
$ pipenv install --dev && pipenv shell
$ python manage.py migrate
```

Load default data setup:

```
$ manage.py loaddata notice-connect-load.json
```

## Running Development Servers

```
$ python manage.py runserver
```

From another tab in the same directory:

```
$ yarn serve
```

The Vue application will be served from [`localhost:8080`](http://localhost:8080/) and the Django API
and static files will be served from [`localhost:8000`](http://localhost:8000/).



## Pycharm additional configuration

Follow this guide to ensure you have pipenv setup

https://www.jetbrains.com/help/pycharm/pipenv.html

Click "Edit Configurations"

Select Django Server under templates

Click + to create a config from the templates

In Environment variables add

```
PYTHONUNBUFFERED=1;DJANGO_SETTINGS_MODULE=backend.settings.dev
```

Click Apply then Ok









