## To update the package do the following steps:
* do required changes
* from the repository root run `npm run test` to verify if all tests passed
* run `npm run build`
* commit, push, merge to master
* from master run `npm version [major/minor/patch]` [wiki](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)
* push
* run `npm publish --tag latest`