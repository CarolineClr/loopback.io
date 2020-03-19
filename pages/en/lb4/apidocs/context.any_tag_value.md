---
lang: en
title: 'API docs: context.any_tag_value'
keywords: LoopBack 4.0, LoopBack 4
sidebar: lb4_sidebar
editurl: https://github.com/strongloop/loopback-next/tree/master/packages/context
permalink: /doc/en/lb4/apidocs.context.any_tag_value.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/context](./context.md) &gt; [ANY\_TAG\_VALUE](./context.any_tag_value.md)

## ANY\_TAG\_VALUE variable

A symbol that can be used to match binding tags by name regardless of the value.

<b>Signature:</b>

```typescript
ANY_TAG_VALUE: TagValueMatcher
```

## Example

The following code matches bindings with tag `{controller: 'A'}` or `{controller: 'controller'}`<!-- -->. But if the tag name 'controller' does not exist for a binding, the binding will NOT be included.

```ts
ctx.findByTag({controller: ANY_TAG_VALUE})

```

