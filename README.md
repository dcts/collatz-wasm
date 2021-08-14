# collatz-wasm
Collatz algorithm written in rust, compiled to WASM and used in a webproject. Chartjs used for graphics. [See DEMO](https://dcts.github.io/collatz-wasm/)

![Bildschirmfoto vom 2021-08-14 08-00-12](https://user-images.githubusercontent.com/44790691/129435753-12997460-19a0-4fdf-83f3-bdebd5d23f57.png)

### prerequisites
1. you need to have Rust installed ([install instructions](https://www.rust-lang.org/tools/install))
2. to compile the rust code to WASM and link with your frontends javascript code, you need `wasm-pack` ([install instructions](https://rustwasm.github.io/wasm-pack/installer/))

### build
```bash
# build rust binaries
cargo build

# compile to wasm
wasm-pack build --target web
```
