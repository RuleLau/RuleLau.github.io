(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{390:function(r,a,v){"use strict";v.r(a);var e=v(42),t=Object(e.a)({},(function(){var r=this,a=r.$createElement,v=r._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[v("h3",{attrs:{id:"内存分配与回收策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存分配与回收策略"}},[r._v("#")]),r._v(" 内存分配与回收策略")]),r._v(" "),v("p",[r._v("对象的内存分配，就是在堆上分配的（也可能经过 JIT 编译后被拆散为标量类型并间接在栈上分配），对象主要分配在新生代的Eden区，少数情况下可能就直接分配在老年代，分配规则不固定的")]),r._v(" "),v("h4",{attrs:{id:"对象优先在eden分配"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对象优先在eden分配"}},[r._v("#")]),r._v(" 对象优先在Eden分配")]),r._v(" "),v("p",[r._v("大多数情况下，对象在新生代Eden 或者 From Survivor 区中分配。")]),r._v(" "),v("ol",[v("li",[r._v("若Eden内存区域足够，存放在Eden区")]),r._v(" "),v("li",[r._v("若From Survivor区域足够，则存放在From Survivor中。")])]),r._v(" "),v("h5",{attrs:{id:"minor-gc-vs-major-gc-full-gc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#minor-gc-vs-major-gc-full-gc"}},[r._v("#")]),r._v(" Minor GC vs Major GC/Full GC：")]),r._v(" "),v("ul",[v("li",[r._v("Minor GC： 回收新生代（包括Eden和Survivor区域），比较频繁同时回收速度快")]),r._v(" "),v("li",[r._v("Major GC/Full GC：回收老年代，经常会伴随至少一次的 Minor GC，但这并非绝对。Major GC 的速度一般会比 Minor GC 慢10倍以上。")])]),r._v(" "),v("blockquote",[v("p",[r._v("在 JVM 规范中，Major GC 和 Full GC 都没有一个正式的定义，所以有人也简单地认为 Major GC 清理老年代，而 Full GC 清理整个内存堆。")])]),r._v(" "),v("h4",{attrs:{id:"大对象直接进入老年代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#大对象直接进入老年代"}},[r._v("#")]),r._v(" 大对象直接进入老年代")]),r._v(" "),v("p",[r._v("大对象是指需要大量连续内存空间的Java对象，如很长的字符串或数据\n一个大对象能够存入 Eden 区的概率比较小，发生分配担保的概率比较大，而分配担保需要涉及大量的复制，就会造成效率低下。\n虚拟机提供了一个 -XX:PretenureSizeThreshold 参数，令大于这个设置值的对象直接在老年代分配，这样做的目的是避免在 Eden 区及两个 Survivor 区之间发生大量的内存复制。（还记得吗，新生代采用复制算法回收垃圾）")]),r._v(" "),v("h4",{attrs:{id:"长期存活的对象将进入老年代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#长期存活的对象将进入老年代"}},[r._v("#")]),r._v(" 长期存活的对象将进入老年代")]),r._v(" "),v("p",[r._v("JVM 给每个对象定义了一个对象年龄计数器。如果对象在Eden出生并经过第一次MinorGC后仍然存活，并且能被Survivor容纳的话，将被移动到Survivor空间中，并且对象年龄设为1，对象在Survivor区中么每熬过一次MinorGC，年龄就会增加一岁，如果年龄达到了老年代的年龄阈值时，就将超过该值的所有对象转移到老年代中去。当进行Minor GC后，存活下来的对象年龄为16时，将会被转移到老年代中。")]),r._v(" "),v("p",[r._v("使用 -XXMaxTenuringThreshold 设置新生代的最大年龄（默认15），只要超过该参数的新生代对象都会被转移到老年代中去。")]),r._v(" "),v("h4",{attrs:{id:"动态对象年龄判定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#动态对象年龄判定"}},[r._v("#")]),r._v(" 动态对象年龄判定")]),r._v(" "),v("p",[r._v("如果新生代中的Survivor中，相同年龄 X 对象的大小的总和大于Survivor空间的一半，那么该区域中年龄 >= X 的存活对象将\n进入老年代，无须等到 MaxTenuringThreshold 中要求的年龄。")]),r._v(" "),v("h4",{attrs:{id:"空间分配担保"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#空间分配担保"}},[r._v("#")]),r._v(" 空间分配担保")]),r._v(" "),v("p",[r._v("只要老年代的连续空间大于新生代对象总大小或者历次晋升的平均大小，就会进行 Minor GC，否则将进行 Full GC。\n通过清除老年代中废弃数据来扩大老年代空闲空间，以便给新生代作担保。这个过程就是分配担保。")]),r._v(" "),v("h4",{attrs:{id:"那些情况下会触发jvm进行full-gc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#那些情况下会触发jvm进行full-gc"}},[r._v("#")]),r._v(" 那些情况下会触发JVM进行Full GC")]),r._v(" "),v("ol",[v("li",[v("p",[r._v("System.gc()方法的调用\n此方法的调用是建议 JVM 进行 Full GC，注意这只是建议而非一定，但在很多情况下它会触发 Full GC，从而增加 Full GC 的频率。通常情况下我们只需要让虚拟机自己去管理内存即可，我们可以通过 -XX:+ DisableExplicitGC 来禁止调用 System.gc()。")])]),r._v(" "),v("li",[v("p",[r._v("老年代空间不足\n老年代空间不足会触发 Full GC 操作，若进行该操作后空间依然不足，则会抛出如下错误：java.lang.OutOfMemoryError:\nJava heap space")])]),r._v(" "),v("li",[v("p",[r._v("永久代空间不足\nJVM 规范中运行时数据区域中的方法区，在 HotSpot 虚拟机中也称为永久代（Permanet Generation），存放一些类信息、常量、静态变量等数据，当系统要加载的类、反射的类和调用的方法较多时，永久代可能会被占满，会触发 Full GC。如果经过 Full GC 仍然回收不了，那么 JVM 会抛出如下错误信息：\njava.lang.OutOfMemoryError: PermGen space")])]),r._v(" "),v("li",[v("p",[r._v("CMS GC 时出现 promotion failed 和 concurrent mode failure\npromotion failed，就是上文所说的担保失败，而 concurrent mode failure 是在执行 CMS GC 的过程中同时有对象要放入老年代，而此时老年代空间不足造成的。")])]),r._v(" "),v("li",[v("p",[r._v("统计得到的 Minor GC 晋升到旧生代的平均大小大于老年代的剩余空间")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);