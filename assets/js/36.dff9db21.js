(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{393:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" string")]),t._v(" "),s("p",[t._v("string 的底层数据结构为 SDS 也叫简单字符串（Simple Dynamic String）。")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("struct sds<T>{\n    //记录buf数组中已使用字节的数量\n    //等于 SDS 保存字符串的长度\n    T len;\n    //记录 buf 数组中未使用字节的数量\n    T allocate;\n    //字节数组，用于保存字符串\n    char buf[];\n}\n")])])]),s("p",[t._v("为什么使用泛型呢，因为当字符串比较短时， len 和 allocate 可以使用 int、short、byte来表示，减少内存的占用 。Redis规定字符串的长度不能超过512M，创建字符串时，len 和 capacity 一样长，不会多分配冗余空间，这是因为大多数场景下，不会使用 append 操作修改字符串。")]),t._v(" "),s("h6",{attrs:{id:"_1-1-为什么需要空间预分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-为什么需要空间预分配"}},[t._v("#")]),t._v(" 1.1 为什么需要空间预分配？")]),t._v(" "),s("p",[t._v("因为一般需要使用 redis 的场景，redis 中的数据，都会频繁修改，并且对于 redis 这种，追求速度的中间件，一定会尽量减少扩容的次数，因为内存重分配，会极大的占用时间，所以才会通过空间预分配和惰性空间释放这两种优化策略。")]),t._v(" "),s("h6",{attrs:{id:"_1-2-空间预分配策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-空间预分配策略"}},[t._v("#")]),t._v(" 1.2 空间预分配策略")]),t._v(" "),s("p",[t._v("字符串在长度（len 值）小于1M之前，扩容空间采用加倍策略，此时 free 和 len 值相同。当长度超过1M之后，为了避免加倍后的冗余空间过大而导致浪费，每次扩容只会多分配1M大小的冗余空间。")]),t._v(" "),s("h6",{attrs:{id:"_1-3-惰性空间释放策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-惰性空间释放策略"}},[t._v("#")]),t._v(" 1.3 惰性空间释放策略")]),t._v(" "),s("p",[t._v('当字符串缩短时，redis 并不会立即使用内存重分配来回收缩短后多出来的字节，而是使用 free 属性将这些字节的数量记录下来，并等待将来使用。例如以前的 sds = "hello"，len=5，free 的值为 0, 后面修改为 sds = "he", 那么 free=3。同样，redis 也会在真正需要内存时，释放 sds 中的未使用的空间，所以惰性空间释放策略不会造成内存浪费。')])])}),[],!1,null,null,null);e.default=r.exports}}]);