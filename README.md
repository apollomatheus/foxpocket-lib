Foxpocket Bitcore Library
=======

A pure and powerful JavaScript Bitcoin library.

## Get Started

```
git clone https://github.com/apollomatheus/foxpocket-lib
cd foxpocket-lib
npm install
```

## Bitcore Documentation

The complete docs are hosted here: [bitcore documentation](http://bitcore.io/guide/). There's also a [bitcore API reference](http://bitcore.io/api/) available generated from the JSDocs of the project, where you'll find low-level details on each bitcore utility.

- [Read the Developer Guide](http://bitcore.io/guide/)
- [Read the API Reference](http://bitcore.io/api/)

To get community assistance and ask for help with implementation questions, please use our [community forums](https://forum.bitcore.io/).

## Examples

Examples can be found in doc folder.

## Security

We don't take any responsability from whoever uses this code.
If you want to report a security failure, send an email to: matheuslds1@gmail.com

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/apollomatheus/foxpocket-lib/blob/master/CONTRIBUTING.md) file.

## Building the Browser Bundle

To build a foxpocket-lib full bundle for the browser:

```sh
gulp browser
```

This will generate files named `foxpocket-lib.js` and `foxpocket-lib.min.js`.


## Development & Tests

```sh
git clone https://github.com/apollomatheus/foxpocket-lib
cd foxpocket-lib
npm install
```

Run all the tests:

```sh
gulp test
```

You can also run just the Node.js tests with `gulp test:node`, just the browser tests with `gulp test:browser`
or create a test coverage report (you can open `coverage/lcov-report/index.html` to visualize it) with `gulp coverage`.

## License

Code released under [the MIT license](https://github.com/apollomatheus/foxpocket-lib/blob/master/LICENSE).

