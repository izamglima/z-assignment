## z* assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### master branch

- Using fetch API to get Posts from JSONPlaceholder API
- Animation when flip cards id --> userId

### rxjs-approach branch

- Using rxjs to create a shared state-like
- Animation when flip cards id --> userId

### Generic Questions

1. JWT is a safe approach to exchange informations between parties because it is digitally signed so it can be verified and trusted by checking the integrity of the public/private key pairs. The only part holding the private key is the one that signed, meaning that the authorization server is the only one who will provide this token.

2. When allowing users write and post HTML code through the application, it may happen cross-site scripting attacks - XSS. The user can write malicious codes in `<script>` tags or on `<img onerror="...">` for example. To prevent this, there is a technique called sanitization, that will treat clean possible threats.

3. Mutable and immutable objects in Javascript:
Primitive datatypes -> immutable (numbers, strings, and Booleans)
Object variable -> mutable
The difference between immutable and mutable is that when changing value of reference variable will affect value of original referenced variable.
  a. Numbers and strings
  b. PROS:Mutation hides changes that result in side effects which in turn makes it hard to debug and find bugs. By keeping your structures immutable, you’ll be able to predict what’s in the state at any given time CONS: Allocating lots and lots of small objects rather than modifying ones you already have can have a performance impact
  c. Using Object.assign() or Spread operator - They do shallow copies, meaning that the original object is also updated

4. Compress / minify files; Optimize images; Avoid using blocking js like inline javascript; Use `async` for external scripts; Check server response time by optimizing database queries or routing.

5. a- Whould choose a good hardware over a standard piece of mediocre one. If the problem is the OS, then there are alternatives like VMs.