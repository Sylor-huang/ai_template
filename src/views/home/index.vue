<template>
  <div class="min-h-screen bg-gradient-to-b from-[#5851DB]/10 to-white">
    <!-- 导航栏 -->
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <image src="/logo.svg"></image>
          <!-- <span class="text-xl font-bold text-[#5851DB]">ChainLotto</span> -->
        </div>
        <div class="flex gap-6">
          <a href="#" class="text-gray-600 hover:text-[#5851DB]">首页</a>
          <a href="#" class="text-gray-600 hover:text-[#5851DB]">开奖结果</a>
          <a href="#" class="text-gray-600 hover:text-[#5851DB]">规则说明</a>
          <a href="#" class="text-gray-600 hover:text-[#5851DB]">关于我们</a>
        </div>
        <button class="px-6 py-2 bg-[#5851DB] text-white rounded-full hover:bg-[#5851DB]/90">
          连接钱包
        </button>
      </div>
    </nav>

    <!-- 主要内容 -->
    <main class="container mx-auto px-6 py-16">
      <div class="flex items-center justify-between">
        <!-- 左侧内容 -->
        <div class="max-w-xl">
          <h1 class="text-5xl font-bold mb-6 text-gray-800">
            由代码定义公平
            <span class="block text-[#5851DB]">让每次参与都值得信赖</span>
          </h1>
          
          <p class="text-gray-600 mb-8 text-lg">
            ChainLotto将传统双色球与区块链技术完美结合，
            通过智能合约确保每次开奖的绝对公平与透明。
          </p>

          <div class="grid grid-cols-2 gap-6 mb-12">
            <div class="p-6 bg-white rounded-xl shadow-sm">
              <h3 class="font-bold text-gray-800 mb-2">完全链上运行</h3>
              <p class="text-gray-600">开奖过程在Solana智能合约中执行，零人工干预</p>
            </div>
            <div class="p-6 bg-white rounded-xl shadow-sm">
              <h3 class="font-bold text-gray-800 mb-2">代码透明开源</h3>
              <p class="text-gray-600">合约代码完全开源，随机算法公开可验证</p>
            </div>
            <div class="p-6 bg-white rounded-xl shadow-sm">
              <h3 class="font-bold text-gray-800 mb-2">资金安全保障</h3>
              <p class="text-gray-600">奖池资金智能合约托管，自动兑奖实时到账</p>
            </div>
            <div class="p-6 bg-white rounded-xl shadow-sm">
              <h3 class="font-bold text-gray-800 mb-2">公平参与机制</h3>
              <p class="text-gray-600">统一规则，所有参与者机会平等</p>
            </div>
          </div>

          <div class="flex gap-4">
            <button class="px-8 py-3 bg-[#5851DB] text-white rounded-full hover:bg-[#5851DB]/90">
              立即参与
            </button>
            <button class="px-8 py-3 border border-[#5851DB] text-[#5851DB] rounded-full hover:bg-[#5851DB]/10">
              了解更多
            </button>
          </div>
        </div>

        <!-- 右侧装饰 -->
        <div class="relative">
          <svg class="w-96 h-96 animate-pulse" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="#5851DB"/>
            <circle cx="100" cy="100" r="50" fill="none" stroke="#ffffff" stroke-width="12"/>
            <circle cx="100" cy="100" r="20" fill="#E4405F"/>
          </svg>
          <!-- 装饰小球 -->
          <div class="absolute top-0 right-0 w-20 h-20 bg-[#E4405F]/20 rounded-full"></div>
          <div class="absolute bottom-0 left-0 w-16 h-16 bg-[#5851DB]/20 rounded-full"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>