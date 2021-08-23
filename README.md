# Svelte Multi Adapter

An adapter to launch multiple adapter

## Installation

```
npm install @macfja/svelte-adapter-multi
```

## Usage

Inside `svelte.config.js`:
```javascript
import staticAdapter from '@sveltejs/adapter-static'
import nodeAdapter from '@sveltejs/adapter-node'
import multiAdapter from '@macfja/svelte-adapter-multi'

const config = {
    kit: {
        adapter: multiAdapter([staticAdapter(/* ... */), nodeAdapter(/* ... */)]),
        target: '#svelte',
    }
};

export default config;
```

## Contributing

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Read more in the [Contributing file](CONTRIBUTING.md)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.