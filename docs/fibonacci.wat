;; Page in WASM are 64Kb
;; Bytes are 8-bit
;; Memory map:
;;   [0x000 .. 0x0007] F(N-2): i64
;;   [0x008 .. 0x000F] F(N-1): i64
;;   [0x010 .. 0x0017] F(N)  : i64
(memory (export "mem") 1)

(func $fibo (export "fibo") (param $n i64)
  (local $step i64)

  ;; Init F(n-2) = 0 and F(n-1) = 1
  (i64.store (i32.const 0x0) (i64.const 0))
  (i64.store (i32.const 0x8) (i64.const 1))

  ;; F(0) = 0
  (if (i64.eq (i64.const 0) (local.get $n))
    (then (i64.store (i32.const 0x10) (i64.const 0))))

  ;; F(1) = 1
  (if (i64.eq (i64.const 1) (local.get $n))
    (then (i64.store (i32.const 0x10) (i64.const 1)))
    (else 
      ;; for N >= 2 we loop
      (local.set $step (i64.const 2))

      (loop $enter_loop
        ;; compute F(n)
        (i64.store (i32.const 0x10) ;; Offset of F(n)
          (i64.add ;; F(n-1) + F(n-2)
            (i64.load (i32.const 0x8))
            (i64.load (i32.const 0x0))))

        ;; Update F(n-2) with value of F(n-1)
        (i64.store (i32.const 0x0) ;; Offset of F(n-2)
          (i64.load (i32.const 0x8))) ;; value of F(n-1)

        ;; Update F(n-1) with value of F(N)
        (i64.store (i32.const 0x8)
          (i64.load (i32.const 0x10)))

        ;; update the step
        (local.set $step (i64.add (i64.const 1 (local.get $step))))

        (br_if $enter_loop
          (i64.le_s (local.get $step) (local.get $n)))
      )
    )
  )
)
