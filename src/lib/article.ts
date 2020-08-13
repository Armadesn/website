
import schedulerFiberScheduler from '../assets/article/scheduler-fiber-scheduler.png'
import lettcode from '../assets/article/lettcode.jpg'
import ts from '../assets/article/ts.png'
interface article {
    imgUrl:any,
    title:string,
    time:string,
    content:string,
    id:number,
    delay:string
}
export const articleInfo : article[] = [
    {
        imgUrl:schedulerFiberScheduler,
        title:'继React16优化后 react Fiber 的调度过程',
        time:'2020年8月12日',
        content:`
            Fiber 是一种数据结构(堆栈帧)，也可以说是一种解决可中断的调用任务的一种解决方案，它的特性就是时间分片(time slicing)和暂停(supense)。
            因为页面每秒绘制的帧数（FPS）达到 60 时，页面是流畅的，小于这个值时，用户会感觉到卡顿。所以Fiber要把渲染更新过程拆分成多个子任务，每次只做一小部分，做完看是否还有剩余时间，如果有继续下一个任务；如果没有，挂起当前任务，将时间控制权交给主线程，等主线程不忙的时候在继续执行

        `,
        id:1,
        delay:'0s'
    },
    {
        imgUrl:lettcode,
        title:'前端职业规划 - 作为前端该如何学好数据结构与算法',
        time:'2020年8月12日',
        content:`
            简单的来说逻辑结构就是数据之间的关系，逻辑结构大概统一的可以分成两种：线性结构、非线性结构。
            线性结构：是一个有序数据元素的集合。 其中数据元素之间的关系是一对一的关系，即除了第一个和最后一个数据元素之外，其它数据元素都是首尾相接的。
            算法：复杂度分析：空间复杂度、时间复杂度。基本算法思想：贪心算法、分支算法、动态规划、回溯算法、枚举算法。排序算法。深度广度优先搜索
        `,
        id:2,
        delay:'.2s'
    },
    {
        imgUrl:ts,
        title:'Vue3.0 前的 TypeScript 最佳入门实践',
        time:'2020年8月12日',
        content:`
            其实Vue官方从2.6.X版本开始就部分使用Ts重写了。
            本博客也是基于ts开发，TypeScript + Umi + dva 毛计喇，学之...…真香！

        `,
        id:3,
        delay:'.4s'
    },
]