.PHONY: dump_string

dump_string: fibonacci.wasm
	hexdump -ve '1/1 "0x%.2x,"' $<

fibonacci.wasm: fibonacci.wat
	wat2wasm $< -o $@
