// const fs = require("fs")
// const path = require("path")

// // const contentString = fs.readFileSync("./text2.txt", { encoding: "utf8" })

// const contentString = `
// 1 A on				B at						C in
// 2 A whom			B who					C whose
// 3 A called			B call 					C calling
// 4 A eating			B eat					C to eat
// 5 A hotels			B bars					C restaurants
// 6 A got				B arrived				C reached
// 7 A is				B will be					C are
// 8 A largest		    B smallest				C newest
// 9 A make				B take					C give
// 10 A tents			B cents					C centres
// `

// const list = contentString.split("\n")
// const newData = [];

// let newItem = {
//   sort: 0,
//   options: undefined,
// }
// let count = 0;

// for (let index = 0; index < list.length; index++) {
//   const itemStr = list[index];
//   if (/^[0-9]{1,3} /.test(itemStr)) {
//     const title = itemStr.replace(/^[0-9]{1,3} /, '').trim().split(/[A-Z] /).filter(Boolean).map((ite) => ({ "label": ite.replace(/\t/, '').trim() }))
//     // console.log(JSON.stringify(title))
//     count++;
//     // newData.push({
//     //   sort: count,
//     //   options: title,
//     // })
//     newData.push(title)
//   }
// }
// console.log(JSON.stringify(newData))

// // fs.writeFileSync('data2.json', JSON.stringify(newData, null, 2), { encoding: "utf8", flag: "w+" })


// const code = `
// 1The Spanish-speaking population has grown very fast recently. T
// 2More people are interested in studying Spanish than before. T
// 3Spanglish is mainly used in formal contexts. F
// 4Norma Rodríguez doesn’t notice when she is speaking Spanglish. T
// 5Juan Cortés doesn’t speak Spanglish because he feels stupid when he tries. F
// `

// const list2 = code.split("\n")
// const newData2 = [];
// for (let index = 0; index < list2.length; index++) {
//   const str = list2[index];
//   if (/^[0-9]{1,3}/.test(str)) {
//     const item = str.replace(/^[0-9]{1,3}/, '').replace(/(T|F)$/, "").trim()
//     let answer = '错误'
//     if (/T$/.test(str.trim())) {
//       answer = '正确'
//     }
//     newData2.push({ topic: [item], answer })
//   }
// }
// console.log(JSON.stringify(newData2))


// const code3 = `
// 1.他们是从美国来的吗？      A
// A.Are they from America?
// B.Do they from America?
// 2.他的女朋友住在波兰吗？      B
// A.Is his girlfriend live in Poland?
// B.Is his girlfriend living in Poland?
// 3.你在哪儿工作？        A
// A.Where do you work?
// B.Where does you work?
// 4.我是老师，我教中文。       B
// A.I am a teacher, I teach Chinese.
// B.I am a teacher. I teach Chinese.
// 5.这些孩子喜欢住在城市。      A
// A.These children like to live in the city.
// B.These childs like living in the city.
// 6.萨姆经常来看你吗？       A
// A.Does Sam often come to see you?
// B.Does Sam often come see you?
// 7.碧和露西在同一所学校读书吗？         A
// A.Do Bea and Lucy study at the same school?
// B.Do Bea and Lucy read the same books at school?
// 8.她认为帮助他人是一项最完美的工作。     B
// A.She thinks helping others is the most perfect job.
// B.She thinks helping others is a perfect job.
// 9.露西的工作是导游。        B
// A.Lucy’s work is a tourist guide.
// B.Lucy works as a tourist guide.
// 10.你家乡有电影院吗？           B
// A.Does your hometown got a cinema?
// B.Is there any cinema in your hometown?
// 11.这里没有火车站。          A
// A.There is not a train station here.
// B.Here is no train station.
// 12.客厅里有一个沙发和一把扶手椅。     A
// A.There is a sofa and an armchair in the living room.
// B.There are a sofa and an armchair in the living room.
// 13.—你这是要去哪儿？—我要去超市。         A
// A.— Where are you going? —I’m going to the supermarket.
// B.— Where are you going? —I’m going to go to the supermarket.
// 14.请查一下火车什么时候开。        B
// A.Please find out when will the train leave.
// B.Please find out when the train leaves.
// 15.他收藏着不少外国硬币。       A
// A.He has a very good collection of foreign coins.
// B.He has collected many foreign coin.
// 16.去公园怎么样？      A
// A.How about going to the park?
// B.How about go to the park?
// 17.你能借我一把伞吗？        A
// A.Can you lend me an umbrella?
// B.Can you borrow me an umbrella?
// 18.玛丽穿着一件游泳衣。       B
// A.Mary is putting on a swimming costume.
// B.Mary is wearing a swimming costume.
// 19.我爸爸明早飞北京。        A
// A.My father is flying to Beijing tomorrow morning.
// B.My father is going to fly to Beijing tomorrow morning.
// 20.我们整夜打牌、讲故事打发时间。         A
// A.We passed the night playing cards and telling stories all night.
// B.We passed the night play cards, tell stories all night.
// 21.晚上七点半爸爸在火车站接我们。        A
// A.My father met us at the railway station at about 7:30.
// B.My father received us at the railway station at about 7:30.
// 22.我昨晚睡得很晚。      B
// A.I slept very late yesterday night.
// B.I slept very late last night.
// 23.经验是最好的老师。       A
// A.Experience is the best teacher.
// B.Experience is the most good teacher.
// 24.我从不说谎。          A
// A.I never tell a lie.
// B.I have never told a lie.
// 25.有人在敲门。      B
// A.Someone is knocking the door.
// B.Someone is knocking at the door.
// 26.我每年回去看望父母两到三次。        A
// A.I go home to visit my parents two or three times a year.
// B.I go home to visit my parents twice or three times a year.
// 27.书桌靠墙放着。       B
// A.The desk is opposite the wall.
// B.The desk is against the wall.
// 28.你不许在这里过马路。      B
// A.You need not cross the road here.
// B.You must not cross the road here.
// 29.我们一起去那里吧！       A
// A.Let’s go there together!
// B.Lets go there together!
// 30.努力工作多年后，他们买了自己的房子，并且搬了进去。      A
// A.After many years’ hard work, they afforded to buy their own house and moved into it.
// B.After many years’ hard work, they afforded to buy their own house, moved into it.
// 31.你不应该忘记说谢谢你。       A
// A.You should not forget to say “thank you”.
// B.You should not forget saying “thank you”.
// 32.我应该把这件事情告诉他吗？      B
// A.Must I tell him about it?
// B.Should I tell him about it?
// 33.我不得不每天很早就起床。        A
// A.I have to get up very early in the morning every day.
// B.I must get up very early in the morning every day.
// 34.你不可以对别人这么粗鲁。     A
// A.You can’t be so rude to other people.
// B.You are not able to be so rude to other people.
// 35.你想喝一点牛奶吗？       B
// A.Do you want to drink a little milk?
// B.Would you like a little milk?
// 36.她爱吃甜食，每天都吃几粒糖果。         A
// A.She has got a sweet tooth and eats a few sweets every day.
// B.She loves eating sweets and eats a few sweets every day.
// 37.你可以尽你最大的努力，但不保证会成功。       B
// A.You can try your best, however, success is not guaranteed.
// B.You can try your best, but success is not guaranteed.
// 38.《哈利·波特》成为今年奥斯卡大奖的赢家，这并不奇怪。        A
// A.Harry Potter is not a surprise winner at this year’s Oscar Awards.
// B.Harry Potter becomes the biggest winner at this year’s Oscar Awards, it is not a surprise.
// 39.玛吉不打算参加我们的体育俱乐部。       A
// A.Margie isn’t going to join our sports club.
// B.Margie isn’t going to join up our sports club.
// 40.你曾梦想过成为一名科学家吗？      A
// A.Have you ever dreamed of becoming a scientist?
// B.Do you ever dream of becoming a scientist?
// 41.这家小酒馆既提供餐食，也提供酒水。      B
// A.This pub supplies meals and drinks, too.
// B.This pub serves meals as well as drinks.
// 42.你去过西班牙吗？    A
// A.Have you ever been to Spain?
// B.Did you go to Spain?
// 43.她深受学生喜爱。      A
// A.She is popular with students.
// B.She is loved deeply by students.
// 44.火车十分钟前就到了。       B
// A.The train has arrived ten minutes ago.
// B.The train arrived ten minutes ago.
// 45.他们只有受到邀请时才会来。       A
// A.They will only come if they are invited.
// B.They will come if only they are invited.
// 46.我们在背单词上花费太多的时间。      A
// A.We spend too much time learning words by heart.
// B.We waste too much time on learning words by heart.
// 47.当遇到生词时，我经常查英语词典。      B
// A.When I come across a new word, I often check an English dictionary.
// B.When I come across a new word, I often consult an English dictionary.
// 48.你昨晚睡得好吗？        A
// A.Did you sleep well last night?
// B.Do you sleep well last night?
// 49.比起他的真名，他的笔名更是众所周知。     B
// A.As for his real name, his pen name was more known.
// B.He was better known for his pen name than for his real name.
// 50.他从国外归来后才在一所高校任教师。       A
// A.He did not work as a teacher in a university until he came back from abroad.
// B.He worked as a teacher in a university after he came back from abroad.
// `

// const list3 = code3.split("\n").map((i) => i.trim()).filter(Boolean)
// const newData3 = [];
// let _item3 = { id: "", topic: [], options: [], answer: undefined }
// let count1 = 0
// for (let index = 0; index < list3.length; index++) {
//   const element = list3[index];
//   if (/^[0-9]{1,3}/.test(element)) {
//     if (typeof _item3.answer === "number") {
//       const options = _item3.options;
//       options[_item3.answer].isTrue = true
//       delete _item3.answer
//     }
//     const item = element.replace(/^[0-9]{1,3}\./, '').replace(/[a-zA-Z]$/, "").trim()
//     let answer = undefined
//     if (/A$/.test(element)) {
//       answer = 0
//     }
//     if (/B$/.test(element)) {
//       answer = 1
//     } if (/C$/.test(element)) {
//       answer = 2
//     }
//     if (/D$/.test(element)) {
//       answer = 3
//     }
//     count1++;
//     _item3 = { id: count1, topic: [item], options: [], answer }
//     newData3.push(_item3)
//   } else {
//     const str = element.replace(/^[A-Z]/, '').trim()
//     _item3.options.push({ label: str })
//   }
// }
// console.log(JSON.stringify(newData3))

// const code4 = `
// 1 McDonald’s was founded in      .
//  A New York       	B California    		C Texas
// 2 The busiest McDonald’s restaurant is in      .
//  A America			B Britain 			C Moscow
// 3 Coca-Cola was invented by      .
//  A a pharmacist 		B a doctor  			C a nutritionist
// 4 Nokia is based in      .
//  A Japan           	B Korea         		C Finland
// 5 The first pair of Levi’s jeans were made in      .
// A 1853           	B 1873          		C 1903
// `

// const list4 = code4.split("\n").map((i) => i.trim()).filter(Boolean)
// const newData4 = [];
// let _item4 = { topic: [], options: [] }
// for (let index = 0; index < list4.length; index++) {
//   const element = list4[index];
//   if (/^[0-9]{1,3}/.test(element)) {
//     const item = element.replace(/^[0-9]{1,3}\./, '').trim()
//     _item4 = { topic: [item], options: [] }
//     newData4.push(_item4)
//   } else {
//     const title = element.replace(/^[0-9]{1,3} /, '').trim().split(/[A-Z] /).filter(Boolean).map((ite) => ({ "label": ite.replace(/\t/, '').trim() }))
//     // const str = element.replace(/^[A-Z]/, '').trim()
//     _item4.options = title
//   }
// }
// console.log(JSON.stringify(newData4))

// 单选题处理

// const code = `
// 1、从用户的观点看，操作系统是______。
// A.用户与计算机之间的接口
// B.控制和管理计算机资源的软件
// C.合理地组织计算机工作流程的软件
// D.由若干层次的程序按一定的结构组成的有机体
// 2、提高单机资源利用率的关键技术是______。
// A.脱机技术
// B.虚拟技术
// C.交换技术
// D.多道程序设计技术
// 3、当 CPU 执行操作系统内核代码时，称处理器处于______。
// A. 自由态
// B.用户态
// C.内核态
// D.就绪态
// 4、一个进程是______。
// A.由处理机执行的一个程序
// B.一个独立的程序+数据集
// C.PCB 结构、程序和数据的组合
// D.一个独立的程序
// 5、在多道程序设计环境下，操作系统分配资源以______为单位。
// A. 程序
// B.指令
// C.进程
// D. 作业
// 6、在操作系统中，临界区是______。
// A. 一个缓冲区
// B.一段共享数据区
// C. 一段程序
// D.一个互斥资源
// 7、当出现______情况下，系统可能出现死锁。
// A.进程释放资源
// B.一个进程进入死循环
// C.多个进程竞争资源出现了循环等待
// D.多个进程竞争共享型设备
// 8、操作系统中的三级调度是指______。
// A. 处理机调度、资源调度和网络调度
// B. CPU 调度、设备调度和存储器调度
// C. 作业调度、进程调度和资源调度
// D. 作业调度、进程调度和中级调度
// 9、当一进程运行时，系统可基于某种原则强行将其撤下，把处理机分配给其他进程，这种
// 调度方式是______。
// A.非剥夺方式
// B.剥夺方式
// C.中断方式
// D.查找方式
// 10、从进程提交给系统开始到进程完成为止的时间间隔称为______。
// A.进程周转时间
// B.进程运行时间
// C.进程响应时间
// D. 进程等待时间
// 11、分时操作系统通常采用______策略为用户服务。
// A.时间片轮转
// B.先来先服务
// C.短作业优先
// D. 优先级
// 12、存储管理的目的是______。
// A.方便用户
// B.提高内存利用率
// C.方便用户和提高内存利用率
// D.增加内存实际容量
// 13、______是指将作业不需要或暂时不需要的部分移到外存，让出内存空间以调入其他所需
// 数据。
// A.覆盖技术
// B.交换技术
// C.虚拟技术
// D. 物理扩充
// 14、虚拟内存的基础是______。
// A.局部性理论
// B.代码的顺序执行
// C.变量的连续访问
// D.指令局部性
// 15、若处理器有 32 位地址，则它的虚拟地址空间为______字节。
// A.2GB
// B.4GB
// C.100KB
// D.640KB
// 16、文件系统是指______。
// A.文件的集合
// B.文件的目录
// C.实现文件管理的一组软件
// D.文件、管理文件的软件及数据结构的总体
// 17、在有随机存取需求和文件长度动态增长的情况下，宜选择______方式。
// A.索引分配
// B.连续分配
// C.链接分配
// D.都不对
// 18、如果I/O设备与存储设备进行数据交换不经过CPU来完成，这种数据交换方式是______。
// ( )
// A.程序查询
// B.中断方式
// C.DMA 方式
// D.无条件存取方式
// 19、引入高速缓存的主要目的是______。
// A.提高 CPU 的利用率
// B.提高 I/O 设备的利用率
// C.改善 CPU 与 I/O 设备速度不匹配的问题
// D.节省内存
// 20、磁盘调度的目的是为了缩短______时间。
// A.寻道
// B.延迟
// C.传送
// D. 启动
// 21、在分时操作系统中，当用户数为 50 时，为了保证响应时间不超过 1 秒，选取的时间片
// 最大值为______。
// A.10ms
// B.20ms
// C.50ms
// D.100ms
// 22、在以下选项中，______不属于操作系统提供给用户的可使用资源。
// A.中断机制
// B.处理器
// C.存储器
// D.I/O 设备
// 23、Linux 操作系统的内核使用的是______。
// A. 单一内核结构
// B.层次结构
// C.虚拟机结构
// D.微内核结构
// 24、操作系统通过______对进程进行管理。
// A.JCB
// B.PCB
// C.DCT
// D.CHCT
// 25、以下进程状态转变中，______转变是不可能发生的。
// A. 运行到就绪
// B.运行到阻塞
// C.阻塞到运行
// D. 阻塞到就绪
// 26、在操作系统中，P、V 操作是一种______。
// A. 机器指令
// B.时钟中断
// C. 作业控制命令
// D.低级进程通信原语
// 27、死锁的预防是根据______而采取措施实现的。
// A.配置足够的系统资源
// B.使进程的推进顺序合理
// C.破坏死锁的四个必要条件之一
// D.防止系统进入不安全状态
// 28、以下______算法与作业的运行时间有关。
// A. 优先级调度
// B.时间片轮转
// C.短作业优先
// D.先来先服务
// 29、在分时操作系统中，进程调度经常采用______算法。
// A.先来先服务
// B.最高优先权
// C.时间片轮转
// D.随机
// 30、______优先级是在创建进程时确定的，确定之后在整个进程运行期间不再改变。
// A.先来先服务
// B.静态
// C.动态
// D. 短作业
// 31、在进程调度算法中，对短进程不利的是______。
// A.短进程优先调度算法
// B.先来先服务算法
// C.高响应比优先算法
// D.多级反馈队列调度算法
// 32、以下存储管理方式中，______方式可以采用静态重定位。
// A.固定分区
// B.分页
// C.分段
// D.都不是
// 33、在固定分区分配中，每个分区的大小是______。
// A.相同
// B.随作业长度变化
// C.可以不同但预先固定
// D.可以不同但根据作业长度固定
// 34、最佳适应算法的空闲分区是______。
// A.按大小递减顺序连在一起
// B.按大小递增顺序连在一起
// C.按地址由小到大排列
// D.按地址由大到小排列
// 35、虚拟存储技术是______。
// A.物理上扩充内存空间的技术
// B.逻辑上扩充内存空间的技术
// C.物理上扩充外存空间的技术
// D.扩充输入输出缓冲区的技术
// 36、以时间换空间的技术是______。
// A.分时技术
// B.虚拟技术
// C.并发技术
// D.缓冲技术
// 37、通常情况下，用户程序经过编译之后得到的可执行文件属于______。
// A.ASCII 文件
// B.普通文件
// C.目录文件
// D.特别文件
// 38、索引文件由逻辑文件和______组成。
// A.符号表
// B.索引表
// C.交叉访问表
// D.链接表
// 39、磁盘上的文件以______单位读写。
// A.盘块
// B.记录
// C.柱面
// D.磁道
// 40、DMA 控制方式是在______之间建立一条直接数据通路。
// A.I/O 设备和主存
// B.两个 I/O 设备
// C.I/O 设备和 CPU
// D.CPU 和主存
// 41、在操作系统中，并发性是指若干事件______发生。
// A.在同一时刻
// B.一定在不同时刻
// C.某一时间间隔内
// D.依次在不同事件间隔内
// 42、在单 CPU、多道程序环境下的各道程序在宏观上是并行，在微观上则是______。
// A.并行
// B.并发
// C.串行
// D.串发
// 43、有关虚拟机的叙述中错误的是______。
// A.每个虚拟机都像是裸机硬件的一个拷贝
// B.在计算机上安装了 Java 虚拟机便可以执行 Java 的字节代码
// C.在虚拟机结构中，主机本身拥有一个独立的操作系统
// D.在裸机上安装虚拟机便可以执行用户程序
// 44、某个运行中的进程要申请打印机，它将变为______。
// A.就绪态
// B.阻塞态
// C.创建态
// D.撤销态
// 45、进程状态由就绪态转换为运行态是由______引起的。
// A. 中断事件
// B.进程状态转换
// C.进程调度
// D. 为程序创建进程
// 46、以下______属于临界资源。
// A. 磁盘存储介质
// B.公用队列结构
// C. 私用数据
// D.可重写的程序代码
// 47、死锁产生的原因之一是______。
// A.系统中没有采用 SPOOLing 技术
// B.使用的 P、V 操作过多
// C.有共享资源存在
// D.资源分配不当
// 48、有 3 个作业 J1、J2、J3，其运行时间分别是 2、5、3 小时，假定它们同时到达，并在同一台处理机上以单道方式运行，则平均周转时间最小的执行序列是______。
// A. J1、J2、J3
// B.J3、J2、J1
// C.J2、J1、J3
// D.J1、J3、J2
// 49、一种既有利于短作业又兼顾到长作业的作业调度算法是______。
// A.先来先服务
// B.时间片轮转
// C.高响应比优先
// D.短进程优先
// 50、______调度算法有利于 CPU 繁忙型的作业，而不利于 I/O 繁忙型的作业。
// A.时间片轮转
// B.先来先服务
// C.短作业优先
// D.优先级
// 51、进程调度算法采用固定时间片轮转法，时间片过大时，就会使时间片轮转法转化为______算法。
// A.高响应比优先
// B.先来先服务
// C.短进程优先调度
// D.都不对
// 52、对主存储器的访问，是______。
// A.以块或段为单位
// B.以字节或字为单位
// C.随存储器的管理方案不同而异
// D.以用户的逻辑记录为单位
// 53、首次适应算法的空闲分区是______。
// A.按大小递减顺序连在一起
// B.按大小递增顺序连在一起
// C.按地址由小到大排列
// D.按地址由大到小排列
// 54、在分页存储管理中，主存的分配是______。
// A.以块为单位进行分配
// B.以作业的大小分配
// C.以物理段进行分配
// D.以逻辑记录大小进行分配
// 55、实现虚拟内存最主要的技术是______。
// A.整体覆盖
// B.整体对换
// C.部分对换
// D.多道程序设计
// 56、虚拟内存的最大容量只受______的限制。
// A.物理内存的大小
// B.磁盘空间的大小
// C.数据存放的实际地址
// D.计算机地址位数
// 57、由字符序列组成，文件内的信息不再划分结构，这是指______。
// A.流式文件
// B.记录式文件
// C.顺序文件
// D.有序文件
// 58、文件系统可以采用两级目录结构，这样可以______。
// A.缩短访问文件存储器的时间
// B.实现文件共享
// C.节省内存空间
// D.解决不同用户之间的文件名冲突问题
// 59、文件的物理组织方式是由______确定的。
// A.应用程序
// B.内存容量
// C.外存容量
// D.操作系统
// 60、与设备相关的中断处理过程是由______完成的。
// A.用户层 I/O
// B.设备无关的操作系统软件
// C.中断处理
// D.设备驱动程序
// 61、引入多道程序技术的前提条件之一是系统具有______。
// A. 多个 CPU
// B. 多个终端
// C. 中断功能
// D. 分时功能
// 62、并发性是指若干事件在______发生。
// A. 同一时刻
// B. 同一时间间隔
// C. 不同时刻
// D. 不同时间间隔内
// 63、在分时系统中，时间片一定，______，响应时间越长。
// A. 内存越多
// B. 用户数越多
// C. 后备队列越少
// D. 用户数越少
// 64、在单处理机系统中实现并发技术后，______。
// A. 各进程在某一个时刻并行运行，CPU 与外设间并行工作
// B. 各进程在某一个时间段内并行运行，CPU 与外设间串行工作
// C. 各进程在某一个时间段内并行运行，CPU 与外设间并行工作
// D. 各进程在某一个时刻并行运行，CPU 与外设间串行工作
// 65、在操作系统中，只能在系统态下运行的指令是______。
// A. 读时钟指令
// B. 置时钟指令
// C. 取数指令
// D. 寄存器清零指令
// 66、发生了中断后，进入中断处理的程序属于______。
// A. 用户程序
// B. 可能是用户程序也可能是 OS 程序
// C. OS 程序
// D. 单独的程序，即不是用户程序也不是 OS 程序
// 67、一个进程被唤醒意味着______。
// A. 该进程重新占有了 CPU
// B. 进程状态变为就绪
// C. 它的优先权变为最大
// D. 其 PCB 移至就绪队列的队首
// 68、操作系统中有一组常称为特殊系统调用，它不能被系统中断，在操作系统中称为______。
// A. 初始化程序
// B. 原语
// C. 子程序
// D. 控制模块
// 69、下面对临界区的论述中，正确的是______。
// A. 临界区是指进程中用于实现进程互斥的那段代码
// B. 临界区是指进程中用于实现进程同步的那段代码
// C. 临界区是指进程中用于实现进程通信的那段代码
// D. 临界区是指进程中访问临界资源的那段代码
// 70、进程状态由就绪状态转化到运行状态时由______引起的。
// A. 中断事件
// B. 进程状态转换
// C. 进程调度
// D. 程序被创建为进程
// 71、为了照顾紧迫性作业，应采用______。
// A. 先来先服务调度算法
// B. 短作业优先调度算法
// C. 时间片轮转调度算法
// D. 优先权调度算法
// 72、下面有关选择进程调度算法的准则错误的是______。
// A. 尽量提高处理器利用率
// B. 尽可能提高系统吞吐量
// C. 适当增长进程在就绪队列中的等待时间
// D. 尽快响应交互式用户的请求
// 73、下面关于检测死锁的叙述错误的是______。
// A. 检测死锁方法对系统资源的分配不加限制，只要有则可以进行分配
// B. 检测死锁中系统需要反复检测各进程资源申请和分配情况
// C. 检测死锁是预防系统卷入了死锁
// D. 检测死锁只能够发现死锁，而不能消除死锁
// 74、某系统中有3个并发过程都需要4个同类资源，该系统不会发生死锁的最少资源是______。
// A.9
// B.10
// C.11
// D.12
// 75、在存储管理中采用交换与覆盖技术，其目的是______。
// A. 从物理上扩充内存
// B. 实现主存共享
// C. 节省存储空间
// D. 提高内存利用率
// 76、目录文件所存放的信息是______。
// A. 某一文件存放的数据信息
// B. 某一文件的文件目录
// C. 该目录中所有数据文件目录
// D. 该目录中所有子目录文件和数据文件的目录
// 77、设置当前工作目录的主要目的是______。
// A. 节省外存空间
// B. 节省内存空间
// C. 加快文件的检索速度
// D. 加快文件的读写速度
// 78、下列算法中，用于磁盘调度的是______。
// A. 时间片轮转法
// B. LRU 算法
// C. 最短寻道时间优先算法
// D. 优先级高者优先算法
// 79、CPU 输出数据的速度远远高于打印机的打印速度，为解决这一矛盾，可采用______。
// A. 并行技术
// B. 缓冲技术
// C. 虚存技术
// D. 覆盖技术
// 80、在关于 SPOOLing 的叙述中，______描述是错误的。
// A. SPOOLing 系统中必须使用独占设备
// B. SPOOLing 系统加快了作业执行的速度
// C. SPOOLing 系统使独占设备变成共享设备
// D. SPOOLing 系统提高处理机与通道并行工作的能力
// 81、以下______功能不是操作系统具备的主要功能。
// A. 内存管理
// B. 中断处理
// C. 文字编辑
// D. CPU 调度
// 82、在单处理机系统中，处于运行态的进程______。
// A. 只有一个
// B. 可以有多个
// C. 不能被挂起
// D. 必须在执行完后才能被撤下
// 83、进程和程序的本质区别是______。
// A. 存储在内存和外存
// B. 顺序和非顺序执行机器命令
// C. 分时使用和独占使用计算机资源
// D. 动态和静态特征
// 84、设两个进程共用一个临界资源的互斥信号量 mutex，当 mutex=-1 时表示______。
// A. 一个进程进入了临界区，另一个进程等待
// B. 没有一个进程进入临界区
// C. 两个进程都进入了临界区
// D. 两个进程都在等待
// 85、并发进程之间______。
// A. 彼此无关
// B. 必须同步
// C. 必须互斥
// D. 可能需要同步或互斥
// 86、进程控制块是描述进程状态和特性的数据结构，一个进程______。
// A. 可以有多个进程控制块
// B. 可以和其他进程共用一个进程控制块
// C. 可以没有进程控制块
// D. 只能有唯一的进程控制块
// 87、死锁的预防是根据______而采取措施实现的。
// A.配置足够的系统资源
// B.使进程的推进顺序合理
// C.破坏死锁的四个必要条件之一
// D.防止系统进入不安全状态
// 88、为了使系统中各部分资源得到均衡使用，就必须选择对资源需求不同的作业进行合理搭配。这项工作是由______完成的。
// A. 作业调度
// B. 中级调度
// C. 进程调度
// D. 设备调度
// 89、现有 3 个同时到达的作业 J1、J2 和 J3，他们的执行时间分别是 T1、T2 和 T3，且 T1<T2<T3。系统按单道方式运行且采用短作业优先算法，则平均周转时间是______。
// A. T1+T2+T3
// B. (T1+T2+T3)/3
// C. (3T1+2T2+T3)/3
// D. (T1+2T2+3T3)/3
// 90、下列调度算法中，______调度算法是绝对可以抢占的。
// A. 先来先服务
// B. 时间片轮转
// C. 优先级
// D. 短进程优先
// 91、在下列选项中，属于解除死锁的方法是______。
// A. 剥夺资源法
// B. 资源分配图简化法
// C. 银行家算法
// D. 资源静态分配法
// 92、对主存储器的访问，是______。
// A. 以页（块）或段位单位
// B. 以字节或字位单位
// C. 随存储器的管理方案不同而异
// D. 以用户的逻辑记录为单位
// 93、如果系统的资源分配图______，则系统处于死锁状态。
// A. 出现了环路
// B. 没有环路
// C. 每种资源只有一个，并出现了环路
// D. 每个进程节点至少有一条请求边
// 94、在固定分区分配中，每个分区的大小是______。
// A. 随作业长度变化
// B. 相同
// C. 可以不同但预先固定
// D. 可以不同但根据作业长度固定
// 95、段页式存储管理汲取了页式存储管理和段式存储管理的长处，其实现原理结合了页式和段式管理的基本思想，即______。
// A. 用分段方法来分配和管理物理存储空间，用分页方法来管理用户地址空间
// B. 用分段方法来分配和管理用户地址空间，用分页方法来管理物理存储空间
// C. 用分段方法来分配和管理主存空间，用分页方法来管理辅存空间
// D. 用分段方法来分配和管理辅存空间，用分页方法来管理主存空间
// 96、虚拟存储技术是______。
// A. 扩充内存物理空间的技术
// B. 扩充逻辑地址空间的技术
// C. 扩充外存空间的技术
// D. 扩充输入输出缓冲区的技术
// 97、操作系统处理缺页中断时，选择一种好的调度算法对主存和辅存中的信息进行高效调度尽可能地避免______。
// A. 碎片
// B. CPU 空闲
// C. 多重中断
// D. 抖动
// 98、下列文件物理结构中，适合随机访问且易于文件扩展的是______。
// A. 连续结构
// B. 索引结构
// C. 链式结构且磁盘块定长
// D. 链式结构且磁盘块变长
// 99、I/O 系统硬件结构分为 4 级：1.设备控制器；2.I/O 设备；3.计算机；4.I/O 通道。按级别由高到低的顺序是______。
// A. 2-4-1-3
// B. 3-1-4-2
// C. 2-1-4-3
// D. 3-4-1-2
// 100、程序员利用系统调用打开 I/O 设备时，通常使用的设备标识是______。
// A. 逻辑设备名
// B. 物理设备名
// C. 主设备号
// D. 从设备号
// `
// const list = code.split("\n").map((it) => it.trim()).filter(Boolean)
// const getAs = (title) => {
//   const _title = title.trim()
//   if (/[（\(]\s*[A|a]+\s*[）\)]/.test(_title) || /[A|a]$/.test(_title)) {
//     return 0
//   }
//   if (/[（\(]\s*[B|b]+\s*[）\)]/.test(_title) || /[B|b]$/.test(_title)) {
//     return 1
//   }
//   if (/[（\(]\s*[C|c]+\s*[）\)]/.test(_title) || /[C|c]$/.test(_title)) {
//     return 2
//   }
//   if (/[（\(]\s*[D|d]+\s*[）\)]/.test(_title) || /[D|d]$/.test(_title)) {
//     return 3
//   }
// }
// const _dataList = []
// let _item = {
//   topic: [],
//   options: [],
//   id: 0,
//   isIndex: undefined
// }
// let count = 0;
// for (let index = 0; index < list.length; index++) {
//   const element = list[index];
//   if (/^[0-9]{1,3}/.test(element)) {
//     if (_item.id) {
//       if (_item.options[_item.isIndex]) {
//         _item.options[_item.isIndex].isTrue = true
//       }
//       delete _item.isIndex;
//     }
//     count++;
//     const item = element
//       .replace(/^[0-9]{1,3}\./, '')
//       .replace(/^[0-9]{1,3}\．/, '')
//       .replace(/^[0-9]{1,3}\、/, '')
//       .replace(/^[0-9]{1,3}/, '')
//       .replace(/[（\(]\s*[A-D]+\s*[）\)]/, "(  )")
//       .replace(/[a-dA-D]$/, "")
//       .trim()
//     _item = { id: count, topic: [item], options: [], isIndex: getAs(element) }
//     _dataList.push(_item)
//   } else {
//     if (
//       /^[a-zA-z]?.\)/.test(element)
//       || /^[a-zA-z] /.test(element)
//       || /^[a-zA-z]\./.test(element)
//       || /^[a-zA-z]\、/.test(element)
//       || /^[a-zA-z]?.\、/.test(element)
//       || /^[a-zA-z]\．/.test(element)
//       || /^[a-zA-z]?.\．/.test(element)
//     ) {
//       // ．
//       // 答案
//       const _value = element.replace(/^[a-zA-z]?.\)/, '')
//         .replace(/^[a-zA-z] /, '')
//         .replace(/^[a-zA-z]\./, '')
//         .replace(/^[a-zA-z]\、/, '')
//         .replace(/^[a-zA-z]?.\、/, '')
//         .replace(/^[a-zA-z]\．/, '')
//         .replace(/^[a-zA-z]?.\．/, '')
//         .trim();
//       _item.options.push({ label: _value })
//     } else {
//       // _item.topic.push(element)
//     }
//   }
// }
// if (_item.id) {
//   if (_item.options[_item.isIndex]) {
//     _item.options[_item.isIndex].isTrue = true
//   }
//   delete _item.isIndex;
// }
// console.log(JSON.stringify(_dataList, null, 2))

// fs.writeFileSync('text2.json', JSON.stringify(_dataList, null, 2), { encoding: "utf8", flag: "w+" })

// 判断题

// const code2 = `
// `

// const list2 = code2.split("\n").map((it) => it.trim()).filter(Boolean)
// const _list = []
// for (let index = 0; index < list2.length; index++) {
//   const element = list2[index];
//   const topic = element.
//     replace(/^[0-9]{1,3}\./, '').
//     replace(/^[0-9]{1,3}\．/, '').
//     replace(/^[0-9]{1,3}\、/, '').
//     replace(/[错|对|T|F]$/, "").trim();
//   let answer = ''
//   if (/[对|T]$/.test(element)) {
//     answer = '正确'
//   } else if (/[错|F]$/.test(element)) {
//     answer = '错误'
//   }
//   _list.push({ id: index + 1, topic: [topic], answer });
// }
// console.log(_list)

// 简答题

// const code = `
// `

// const list = code.split("\n").map((it) => it.trim()).filter(Boolean)
// let _item = {
//   id: "",
//   topic: [],
//   answer: ''
// }
// let count = 0
// const _listData = []
// for (let index = 0; index < list.length; index++) {
//   const element = list[index];
//   if (/^[0-9]{1,3}\./.test(element)) {
//     const topic = element.replace(/^[0-9]{1,3}\./, '').trim();
//     count++;
//     _item = {
//       id: count,
//       topic: [topic],
//       answer: ''
//     }
//     _listData.push(_item)
//   } else {
//     _item.answer = element.trim()
//   }
// }
// console.log(JSON.stringify(_listData))