(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{382:function(e,l,v){"use strict";v.r(l);var n=v(42),i=Object(n.a)({},(function(){var e=this,l=e.$createElement,v=e._self._c||l;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"jvm-知识点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jvm-知识点"}},[e._v("#")]),e._v(" jvm 知识点")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("程序计数器和栈帧为什么不能放在一起？")])]),e._v(" "),v("li",[v("p",[e._v("tomcat 破坏双亲委派模型的原因？")])]),e._v(" "),v("li",[v("p",[e._v("方法区、永久代、元空间的关系？")])]),e._v(" "),v("li",[v("p",[e._v("双亲委派模型的设计？")])]),e._v(" "),v("li",[v("p",[e._v("方法区回收的条件？")]),e._v(" "),v("ol",[v("li",[e._v("该类的所有实例（堆中）都已经被回收。")]),e._v(" "),v("li",[e._v("该类的classloader已经被回收。")]),e._v(" "),v("li",[e._v("该类的对应的class 对象没有任何引用。")])])]),e._v(" "),v("li",[v("p",[e._v("类初始化的时机？")]),e._v(" "),v("ol",[v("li",[e._v("当创建某个类的新实例时（如通过new或者反射，克隆，反序列化等）")]),e._v(" "),v("li",[e._v("当调用某个类的静态方法时")]),e._v(" "),v("li",[e._v("当使用某个类或接口的静态字段时")]),e._v(" "),v("li",[e._v("调用Java API中的某些反射方法时，比如类Class中的方法，或者java.lang.reflect中的类的方法时")]),e._v(" "),v("li",[e._v("当初始化某个子类时")]),e._v(" "),v("li",[e._v("当虚拟机启动某个被标明为启动类的类（即包含main方法的那个类） 所以System.ou.println(Test.class)不满足上面6种情 况，也就没有做初始化")])])]),e._v(" "),v("li",[v("p",[e._v("Java 对象中的引用类型？")]),e._v(" "),v("ol",[v("li",[e._v("强引用：一个变量引用一个对象。例如 Object obj = new Object(); 垃圾回收不会去回收这个对象。")]),e._v(" "),v("li",[e._v("软引用：实例对象用一个SofrRefrence 软引用类型的包装的对象，例如 "),v("code",[e._v("SoftReference<Object> softReference = new SoftReference<>(new Object());")]),e._v(" 正常情况垃圾回收不会回收它，但是发现内存空间不够存放新的对象时，内存快溢出时，就会进行回收。")]),e._v(" "),v("li",[e._v("弱引用：无论内存是否足够，只要垃圾回收开始，那么就会将弱引用关联对象就会被回收。例如 "),v("code",[e._v("WeakReference<Object> weakReference = new WeakReference<>(new Object());")])]),e._v(" "),v("li",[e._v("虚引用：如果一个对象仅持有虚引用，那么它就和没有任何引用一样，它随时可能会被回收，在 JDK1.2 之后，用 PhantomReference 类来表示，通过查看这个类的源码，发现它只有一个构造函数和一个 get() 方法，而且它的 get() 方法仅仅是返回一个null，也就是说将永远无法通过虚引用来获取对象，虚引用必须要和 ReferenceQueue 引用队列一起使用。例如："),v("code",[e._v("PhantomReference<Object> phantomReference = new PhantomReference<>(new Object(), new ReferenceQueue<>());")]),e._v("当垃圾回收器准备回收一个对象时，如果发现它还有引用，那么就会在回收对象之前，把这个引用加入到与之关联的引用队列中去。程序可以通过判断引用队列中是否已经加入了引用，来判断被引用的对象是否将要被垃圾回收，这样就可以在对象被回收之前采取一些必要的措施。")])])]),e._v(" "),v("li",[v("p",[e._v("parnew+cms的gc，如何保证只做ygc，jvm参数如何配置？答：根据年轻代对象放入老年代的规则可知\n我觉的应该考虑两个方向：避免FullGC和避免年轻代对象进入老年代")]),e._v(" "),v("ul",[v("li",[e._v("避免FullGC\n1、保证老年代可用空间大于新生代所有对象，避免MinorGC前进行FullGC\n2、如果1可以保证，那后面-XX：HandlePromotionFailure、进入老年代的对象平均大小等比较就不需要考虑了\n3、保证MinorGC后存活对象不大于Survivor空间")]),e._v(" "),v("li",[e._v("避免年轻代对象进入老年代\n1、根据实际情况查看每次MinorGC后存活对象的大小，设置合适的Survivor区域大小，保证存活对象进入survivor区，而不是进入老年代\n2、根据对象存活的时间以及MinorGC的间隔时间，确定年龄。比如：3分钟一次MinorGC，而对象可以存活1个小时，那就把对象年龄设置到20,避免对象15岁进入老年代\n3、大对象如果偶尔创建一个，可以设置-XX:PretenureSizeThreshold，使其分配至年轻代。如果创建销毁频繁，就让其直接进入老年代，利用对象池避免频繁创建销毁")])]),e._v(" "),v("ol",[v("li",[e._v("设置晋升老年代年龄的阈值从15加到30.")]),e._v(" "),v("li",[e._v("判断Eden区满时，进行Minor GC 后剩余的对象是否能够被Survivor 区放下，如果能够放下，则可以减少进入老年代的次数。")]),e._v(" "),v("li",[e._v("将年轻代与老年代的比例设置为2：1，然后将Eden区和Survivor区比例进行修改，从8:1:1到6:2:2。 这样可以增加Minor GC，减少Full GC.")])])]),e._v(" "),v("li",[v("p",[e._v("CMS 默认启动的垃圾回收线程数量：（CPU核数+3）/ 4")])]),e._v(" "),v("li",[v("p",[e._v('Concurrent Mode Failure 问题: CMS 并发清理清理阶段，CMS 只不过回收之前标记好的垃圾对象，应用线程会一直进行，可能会进行Minor GC, 那么从年轻代晋升的新的对象，有可能直接放入老年代，这时候，老年代也放不下，就会导致  Concurrent Mode Failure 问题。这时，老年代中可能也会存在没人引用的对象，那么这个就是“浮动垃圾”。然后CMS会自动降级，使用"Serial Old"垃圾回收器，强行系统STW，重新进行标记，清理。')])]),e._v(" "),v("li",[v("p",[e._v("CMS 触发时机：当老年代内存占用一定比例，就会自动执行GC,“-XX:CMSInitiatingOccupancyFaction”参数可以用来设置老年代占用多少比例的时候触发CMS垃圾回收，JDK 1.6里面默认的值是 92%。")])]),e._v(" "),v("li",[v("p",[e._v("CMS 内存碎片化问题，CMS 老年代是标记-清理，CMS有一个参数是“-XX:+UseCMSCompactAtFullCollection”，默认就打开了 他意思是在Full GC之后要再次进行“Stop the World”，停止工作线程，然后进行碎片整理，就是把存活对象挪到一起，空出来大片连续内存空间，避免内存碎片。还有一个参数是“-XX:CMSFullGCsBeforeCompaction”，这个意思是执行多少次Full GC之后再执行一次内存碎片整理的工作，默认 是0，意思就是每次Full GC之后都会进行一次内存整理。")])]),e._v(" "),v("li",[v("p",[e._v("触发 老年代GC 的条件是什么？")]),e._v(" "),v("ol",[v("li",[e._v("老年代已用空间达到了参数 CMSInitiatingOccupancyFaction 设置的比例时会自动触发，默认为92%")])])]),e._v(" "),v("li",[v("p",[e._v("OOM 触发的机制：full gc同时一般会伴随着一次minor GC，如果第一次full GC过程中，因为新创建的对象原因又达到了触发fullGC的条件，首先还是会先minorGC，然后尝试放入新生代,但此时老年代还没有回收完成，再触发一次MajorGC没什么意义，因为重新标记会干了这个事情。 如果minorGC后，新创建的对象仍然放不进内存，需要等待MajorGC结束，如果MajorGC结束后仍然放不进去，就会OOM了")])])]),e._v(" "),v("h4",{attrs:{id:"垃圾收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集器"}},[e._v("#")]),e._v(" 垃圾收集器")]),e._v(" "),v("ol",[v("li",[e._v("G1 收集器的作用？\n"),v("ol",[v("li",[e._v("可以设置系统预计停顿时间，来选择最少回收时间和最多回收对象的 Region 进行垃圾回收。保证GC 对系统停顿影响在可控范围内，同时还可以尽可能回收最多的对象。")])])])])])}),[],!1,null,null,null);l.default=i.exports}}]);