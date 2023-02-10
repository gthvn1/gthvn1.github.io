# Play with wasm and Zig

## Steps

- [X] wrote the html and JS to check how they interact. It is a placeholder for our code.
- [X] get the result from wasm.
- [ ] Do more funky things

## Zig to wasm

To generate wasm file:
- `zig build-lib fibo.zig -target wasm32-freestanding -dynamic`
  - **Note**: without dynamic it generates a *".a"* file.

To get the wasm file as an hexadecimal string I used `hexdump`
- `hexdump -ve '1/1 "0x%.2x,"' ./fibo.wasm`
