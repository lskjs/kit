# Just a Bot-kit
## Sample project example based on Lego Starter Kit

## Develop 
1. `npm install` –– Install node deps
2. `npm run bootstrap` –– Install packages/* deps
3. `npm run dev` –– Run develop mode for all packages

## Develop in Docker

1. `docker-compose run app npm install`
2. `docker-compose run app npm run bootstrap`
3. `docker-compose run app npm run dev`


## Tips
- `npm run link` –– if you want to link other developing packages in the monorep and packages
- `npm run update` –– if you want to update all developing packages versions in the monorep and packages



## Что нужно, чтобы сделать фронт

1. Model (бд, mongoose) Mongo => collection, SQL => table.  (schema + method) UsiversalModel (+method, findByParams)
2. Api => ListApi (CRUD)
3. Store  MOBX, L
3.1 EntityStore (Model для фронта)
3.2 ListStore - list (array of EntityStore + включенные params)
4. ListPage страница (props)
5. фронтовый router (контроллер из MVC) !!!!!!


---------

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://isuvorov.com.com"><img src="https://avatars2.githubusercontent.com/u/1056977?v=4" width="100px;" alt=""/><br /><sub><b>Igor Suvorov</b></sub></a><br /><a href="#question-isuvorov" title="Answering Questions">💬</a> <a href="isuvorov/lib-starter-kit/isuvorov/lib-starter-kit/commits?author=isuvorov" title="Code">💻</a> <a href="#design-isuvorov" title="Design">🎨</a> <a href="isuvorov/lib-starter-kit/isuvorov/lib-starter-kit/commits?author=isuvorov" title="Documentation">📖</a> <a href="#example-isuvorov" title="Examples">💡</a> <a href="#ideas-isuvorov" title="Ideas, Planning, & Feedback">🤔</a> <a href="isuvorov/lib-starter-kit/isuvorov/lib-starter-kit/pulls?q=is%3Apr+reviewed-by%3Aisuvorov" title="Reviewed Pull Requests">👀</a> <a href="isuvorov/lib-starter-kit/isuvorov/lib-starter-kit/commits?author=isuvorov" title="Tests">⚠️</a> <a href="#a11y-isuvorov" title="Accessibility">️️️️♿️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!