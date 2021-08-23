export default function (adapters) {
    return {
        name: '@macfja/svelte-adapter-multi',

        async adapt(argument) {
            await adapters.forEach(item => Promise.resolve(item).then(resolved => resolved.adapt(argument)))
        }
    };
}