# examples
Examples based on the local project definition

> Note: The project format is still under active development 🚧

## Feedback

Please check out the available example or try to create your own one. This should give you a better foundation to give feedback for the following open questions.

## Open Questions

- [ ] Naming for project definition file and environment files (Current: `graphcool.yml` & `.graphcool.env`)
- [ ] Default folder structure (functions, permissions, ...)
- [ ] Variable interpolation syntax (based on [Serverless's syntax](https://serverless.com/framework/docs/providers/aws/guide/variables/))
- [ ] Permission queries: `$authenticatedId: ID!` vs. `$userId: ID!`
- [ ] support a list of permission queries per permission (combined with AND)? would decrease verbosity and increase composibility, but difficult to validate/map variables
- [ ] Should function type with extra configuration be nested or on the top level? If nested, `type: httpRequest` would be a string and `type: serversideSubscription` a map.
- [ ] is there ever a `@model` type that is not a `Node`, or the other way around?

## Development

### Validate schema of `graphcool.yml` file

You can use [pajv](https://github.com/json-schema-everywhere/pajv) (`npm i -g pajv`) to validate files based on JSON schema.

```sh
pajv -s json-schema/graphcool.schema.json -d json-schema/graphcool-flat.yml
```
