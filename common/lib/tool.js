export default {
	// 获取任意两个之间的随机整数
	rnd(n, m){
		return Math.floor(Math.random()*(m-n+1)+n);
	}
}