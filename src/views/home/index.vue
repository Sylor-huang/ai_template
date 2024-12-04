<template>
  <div>
    <div class="relative min-h-screen">
      <el-row>
        <el-col :xs="{span: 24}" :md="{span: 8}" class="p-6 lg:p-10">
          <img src="@/assets/robot.svg" class="text-center h-96" />
        </el-col>
        <el-col :xs="{span: 24}" :md="{span: 16}" class="p-6 lg:p-10">
          <div class="relative z-10 max-w-7xl mx-auto text-center">
            <h1
              class="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              {{ $t("info.a1") }}
            </h1>
            <p class="text-xl text-gray-300 mt-12 mb-4 max-w-2xl mx-auto">
              {{ $t("info.a2") }}
            </p>
            <p class="text-xl text-gray-300 mt-2 max-w-2xl mx-auto">
              {{ $t("info.a3") }}
            </p>
            <div class="my-4">
              <el-space :size="40">
                <el-link
                  class=""
                  href="#"
                  target="_blank"
                  :underline="false"
                >
                  <img
                    src="@/assets/twitter.svg"
                    class="h-14 p-2 bg-gray-300 hover:bg-slate-50 rounded-full"
                  />
                </el-link>
                <el-link
                  class=""
                  href="#"
                  target="_blank"
                  :underline="false"
                >
                  <img
                    src="@/assets/telegram.svg"
                    class="h-14 p-2 bg-gray-300 hover:bg-slate-50 rounded-full"
                  />
                </el-link>
              </el-space>
            </div>
          </div>
        </el-col>
      </el-row>

      <div class="relative z-10 max-w-6xl mx-auto px-6">
        <div
          class="grid md:grid-cols-3 gap-8 bg-white/5 backdrop-blur-xl rounded-2xl p-8"
        >
          <div class="text-center">
            <div
              class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              10K+
            </div>
            <div class="text-gray-400">{{ $t("info.a5") }}</div>
          </div>
          <div class="text-center">
            <div
              class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              95%
            </div>
            <div class="text-gray-400">{{ $t("info.a6") }}</div>
          </div>
          <div class="text-center">
            <div
              class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              24/7
            </div>
            <div class="text-gray-400">{{ $t("info.a7") }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Token Info Section -->
    <div class="relative pt-20" id="token">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2
            class="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            {{ $t("menu.Token") }}
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-sm">
            {{ $t("info.a8") }}
          </p>
        </div>

        <div class="mb-12 p-6 bg-white/5 backdrop-blur-xl rounded-2xl">
          <div class="text-xl font-bold mb-4">{{ $t("info.a9") }}</div>
          <div>
            <el-space wrap>
              <span class="font-mono text-gray-400 break-all"> {{ addr }}</span>
              <CoppyIcon :copy_text="addr" size="small"></CoppyIcon>
            </el-space>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition"
          >
            <div class="text-xl font-bold mb-2">{{ $t("info.a4") }}</div>
            <div class="text-3xl font-bold text-purple-400 mb-2">1B</div>
            <div class="text-gray-400">{{ $t("info.a10") }}</div>
          </div>
          <div
            class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition"
          >
            <div class="text-xl font-bold mb-2">{{ $t("info.a11") }}</div>
            <div class="text-3xl font-bold text-blue-400 mb-2">100%</div>
            <div class="text-gray-400">{{ $t("info.a12") }}</div>
          </div>
          <div
            class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition"
          >
            <div class="text-xl font-bold mb-2">{{ $t("info.a13") }}</div>
            <div class="text-3xl font-bold text-purple-400 mb-2">0%</div>
            <div class="text-gray-400">{{ $t("info.a14") }}</div>
          </div>
          <div
            class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition"
          >
            <div class="text-xl font-bold mb-2">{{ $t("info.a15") }}</div>
            <div class="text-3xl font-bold text-blue-400 mb-2">x%</div>
            <div class="text-gray-400">{{ $t("info.a16") }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative pt-20" id="route_map">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2
            class="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            {{ $t("menu.RouteMap") }}
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-sm">
            {{ $t("info.a17") }}
          </p>
        </div>

        <!-- Roadmap Section -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6">
            <div
              class="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full text-sm"
            >
              Phase 1: {{ $t("phase.a1") }}
            </div>
            <div class="pt-4">
              <h3 class="text-xl font-bold mb-4">{{ $t("phase.a2") }}</h3>
              <ul class="space-y-2 text-gray-400">
                <li>• {{ $t("phase.a3") }}</li>
                <li>• {{ $t("phase.a4") }}</li>
                <li>• {{ $t("phase.a5") }}</li>
                <li>• {{ $t("phase.a6") }}</li>
                <li>• {{ $t("phase.a7") }}</li>
                <li>• {{ $t("phase.a8") }}</li>
              </ul>
            </div>
          </div>

          <div class="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6">
            <div
              class="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full text-sm"
            >
              Phase 2: {{ $t("phase.a9") }}
            </div>
            <div class="pt-4">
              <h3 class="text-xl font-bold mb-4">{{ $t("phase.a10") }}</h3>
              <ul class="space-y-2 text-gray-400">
                <li>• {{ $t("phase.a11") }}</li>
                <li>• {{ $t("phase.a12") }}</li>
                <li>• {{ $t("phase.a13") }}</li>
                <li>• {{ $t("phase.a14") }}</li>
                <li>• {{ $t("phase.a15") }}</li>
                <li>• {{ $t("phase.a16") }}</li>
              </ul>
            </div>
          </div>

          <div class="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6">
            <div
              class="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full text-sm"
            >
              Phase 3: {{ $t("phase.a17") }}
            </div>
            <div class="pt-4">
              <h3 class="text-xl font-bold mb-4">{{ $t("phase.a18") }}</h3>
              <ul class="space-y-2 text-gray-400">
                <li>• {{ $t("phase.a19") }}</li>
                <li>• {{ $t("phase.a20") }}</li>
                <li>• {{ $t("phase.a21") }}</li>
                <li>• {{ $t("phase.a22") }}</li>
                <li>• {{ $t("phase.a23") }}</li>
                <li>• {{ $t("phase.a24") }}</li>
              </ul>
            </div>
          </div>

          <div class="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6">
            <div
              class="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full text-sm"
            >
              Phase 4: {{ $t("phase.a25") }}
            </div>
            <div class="pt-4">
              <h3 class="text-xl font-bold mb-4">{{ $t("phase.a26") }}</h3>
              <ul class="space-y-2 text-gray-400">
                <li>• {{ $t("phase.a27") }}</li>
                <li>• {{ $t("phase.a28") }}</li>
                <li>• {{ $t("phase.a29") }}</li>
                <li>• {{ $t("phase.a30") }}</li>
                <li>• {{ $t("phase.a31") }}</li>
                <li>• {{ $t("phase.a32") }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative pt-20" id="partners">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2
            class="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            {{ $t("menu.Partner") }}
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-sm">
            {{ $t("partner.a1") }}
          </p>
        </div>

        <div class="mb-12 p-6 bg-white/5 backdrop-blur-xl rounded-2xl">
          <el-space wrap :size="40">
            <el-link
              :href="`https://gmgn.ai/sol/token/${addr}`"
              target="_blank"
              :underline="false"
              type="primary"
            >
              <img
                src="@/assets/partners/eliza.jpg"
                class="h-10 lg:h-20 mx-auto"
              />
            </el-link>
            <el-link
              :href="`https://gmgn.ai/sol/token/${addr}`"
              target="_blank"
              :underline="false"
              type="primary"
            >
              <img
                src="@/assets/partners/gmgn.png"
                class="h-10 lg:h-20 mx-auto"
              />
            </el-link>
            <el-link
              :href="`https://dexscreener.com/solana/${addr}`"
              target="_blank"
              :underline="false"
              type="primary"
            >
              <img
                src="@/assets/partners/scr1.png"
                class="h-10 lg:h-20 mx-auto"
              />
            </el-link>
            <el-link
              :href="`https://ave.ai/token/${addr}-solana`"
              target="_blank"
              :underline="false"
              type="primary"
            >
              <img
                src="@/assets/partners/ave3.png"
                class="h-10 lg:h-20 mx-auto"
              />
            </el-link>
            <el-link
              :href="`https://www.geckoterminal.com/solana/pools/${addr}`"
              target="_blank"
              :underline="false"
              type="primary"
            >
              <img
                src="@/assets/partners/cg.png"
                class="h-10 lg:h-20 mx-auto"
              />
            </el-link>
            <el-link
              :href="`https://coinmarketcap.com/dexscan/solana/${addr}/`"
              target="_blank"
              :underline="false"
              type="primary"
            >
              <img
                src="@/assets/partners/cm.png"
                class="h-10 lg:h-20 mx-auto"
              />
            </el-link>
            <el-link
              :href="`https://www.dextools.io/app/cn/solana/pair-explorer/${addr}?t=1732074352286`"
              target="_blank"
              :underline="false"
              type="primary"
            >
              <img
                src="@/assets/partners/tools.png"
                class="h-10 lg:h-20 mx-auto"
              />
            </el-link>
          </el-space>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import CoppyIcon from "@/layout/components/Commons/CoppyIcon";

let addr = ref("8M8NdzK3opKyBQAckhLpyuffXqM3z9QBLHoC4DYwpump");
</script>
