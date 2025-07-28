import caesarCipher from "./caesarCipher.js";

test("Caesar Cipher test :", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");

  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");

  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");

  expect(caesarCipher("This is MY personal Test ! @Sylvain Web.", 6)).toBe(
    "Znoy oy SE vkxyutgr Zkyz ! @Yerbgot Ckh."
  );
});
