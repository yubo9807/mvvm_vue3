import { reactive, toRaw } from "./reactivity/reactive";
import { ref, toRef, toRefs } from "./reactivity/ref";
import { readonly } from "./reactivity/readonly";
import { computed } from "./reactivity/computed";

const obj = {
  a: 1,
  b: {
    c: 3,
    d: 4,
  }
};

const b = reactive(obj)
b.a = 123
delete obj.b

// const a = ref(1);
// a.value
// a.value = 2

// const c = computed(() => 111);
// c.value = 123

// const aRef = toRef(obj, 'a');
// aRef.value = 123
// obj.a = 456
// console.log(aRef.value, obj)

// const r = toRaw(obj)
// r.a = 234
// obj.a = 456
// console.log(r, obj)

// const o = readonly({ a: 1 })
// o.a = 111
// delete o.a
