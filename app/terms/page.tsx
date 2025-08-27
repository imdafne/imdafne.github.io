"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/">
            <Button variant="ghost" className="mb-6 -ml-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回首页
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-fangzheng">
            此间用户协议
          </h1>
          <div className="text-sm text-gray-600 space-y-1">
            <p>发布日期：2025 年 8 月 27 日</p>
            <p>生效日期：2025 年 8 月 27 日</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-gray max-w-none"
        >
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">特别提示</h2>
            <p className="text-gray-700 mb-3">
              欢迎使用开若图科技（上海）有限公司为您提供的此间平台。请您务必审慎并完整阅读以下内容，特别是免除或者限制开若图公司责任的条款、对用户权利进行限制的条款、规定本协议的适用法律的条款。限制、免责条款或者其他涉及您重大权益的条款可能以加粗等形式提示您重点注意。
            </p>
            <p className="text-gray-700 mb-3">
              如您未满18周岁，或存在其他不具备与用户行为相适应的民事行为能力的情形，请您在法定监护人（"监护人"）的陪同、指导下阅读本协议，并在确保监护人同意本协议内容后使用此间平台。您及您的监护人应依照法律法规规定，承担同意本协议及使用此间平台而导致的相应后果。
            </p>
            <p className="text-gray-700">
              <strong>除非您已充分阅读并接受本协议所有条款，否则您无权使用此间平台。</strong>如您不同意本协议或其中任何条款，您应立即停止使用此间平台。您点击"同意"，或者您使用此间平台，或者以其他任何明示或者默示方式表示接受本协议的，均视为您已阅读并同意本协议。本协议即在您与开若图公司之间产生法律效力，成为对双方均具有约束力的法律文件。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">一、定义及协议范围</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">定义</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>此间平台：</strong>指 "此间"客户端软件。</li>
              <li><strong>开若图公司或我们：</strong>此间平台的运营方即开若图科技（上海）有限公司。</li>
              <li><strong>用户：</strong>指 此间 平台的使用人，在本协议中更多地称为"您"。</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">协议范围</h3>
            <p className="text-gray-700">
              本协议是您与开若图公司之间关于您下载、安装、使用此间平台所订立的协议，包括本协议正文、《此间隐私政策》及开若图公司已经发布的或将来可能发布/更新的并采取合理途径通知的各类规则、规范、通知等。所有规则均为本协议不可分割的组成部分，且具有同等法律效力。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">二、此间平台服务内容与说明</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">登录和使用：</h3>
            <p className="text-gray-700 mb-3">
              您可通过Apple ID登录和使用此间平台，登录仅用于身份验证与数据同步，此间平台不会获取您的Apple ID密码或其他账户信息。
            </p>
            <p className="text-gray-700 mb-4">
              如您需将本应用小组件添加至iOS设备主屏幕，请按以下步骤操作：长按桌面空白区域直至图标晃动，点击屏幕左上角的「编辑」按钮，在「添加小组件」控件的搜索栏输入"此间"，选择小组件样式并完成添加。更多操作指引详见 此间平台内 「设置」&gt;「关于和支持」&gt;「如何添加小组件」 栏目。
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">服务内容</h3>
            <p className="text-gray-700 mb-3">
              此间平台是一款专注于 iOS 系统桌面小组件聚合的轻量级实用工具。通过此间平台，您可便捷地添加、管理和使用以下三大类小组件至您的 iOS 设备桌面：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>每日一句：</strong> 每日为您更新精选文本内容，并根据您选定的主题和个性化配置生成匹配的视觉化卡片。</li>
              <li><strong>天气信息：</strong> 为您提供基于设备所在地的实时气象数据，并根据您选定的主题和个性化配置生成匹配的视觉化卡片。</li>
              <li><strong>我的状态：</strong> 基于您授权共享的健康数据，根据您选定的主题和个性化配置生成匹配的视觉化卡片。</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">三、权利与许可</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">平台声明</h3>
            <p className="text-gray-700 mb-4">
              此间平台所提供的内容，包括但不限于图文、文字表述及其组合、界面设计、版面框架、图标、商标等，除涉及第三方授权的软件、内容外，均归属开若图公司所有，受中华人民共和国著作权法、商标法、专利法、反不正当竞争法及国际条约等法律法规的保护。未经开若图公司书面允许，您不得为任何目的擅自使用、复制、再造这些内容、或创造与内容有关的派生产品。
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">许可及限制</h3>
            <p className="text-gray-700 mb-3">除非法律法规允许或开若图公司书面许可，您不得从事下列行为：</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>对此间平台进行反向工程、反向汇编、或者以其他方式尝试获取此间平台的源代码；</li>
              <li>以任何方式（包括但不限于盗链、冗余盗取、非法抓取、模拟下载、深度链接、假冒注册等）直接或间接盗取此间平台的图文、用户信息等信息内容；</li>
              <li>通过非开若图公司开发、授权、许可的第三方软件、插件、外挂、系统，登陆或使用 此间平台，或对此间平台的正常运行进行干扰、破坏、修改或施加其他影响；</li>
              <li>利用或针对此间平台进行任何危害计算机网络安全的行为，包括但不限于：非法侵入网络、干扰网络正常功能、窃取网络数据等危害网络安全的活动，或为上述活动提供程序、工具等支持与帮助；企图干涉、破坏此间平台系统或网络的正常运行，故意传播恶意程序或病毒以及其他破坏干扰正常网络信息服务的行为等。</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">四、法律责任</h2>
            <p className="text-gray-700 mb-3">
              如您违反本协议约定，开若图公司有权作出独立判断，立即暂停或终止向您提供部分或全部此间平台服务。您应自行承担自身损失以及相应法律责任。
            </p>
            <p className="text-gray-700">
              如您的行为给开若图公司造成损失的，您应承担全部赔偿责任，包括行政处罚或损害赔偿款等直接损失以及商誉损失、和解款、律师费、诉讼费等间接损失。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">五、服务的变更、中断、终止</h2>
            <p className="text-gray-700 mb-3">
              开若图公司始终在不断变更和改进此间平台服务，我们会尽最大努力向您提供服务，确保服务的连贯性和安全性。基于此，我们可能会对此间进行更新，您应将软件更新到最新版本，否则我们不保证您可正常使用此间平台。
            </p>
            <p className="text-gray-700">
              您理解并同意，开若图公司根据自身商业决策、政府行为、不可抗力等原因可能会选择中止、中断及终止此间平台的部分或全部服务。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">六、法律适用与管辖</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>本协议签订地为中华人民共和国上海市黄浦区。</li>
              <li>本协议的订立、生效、履行、解释、修订、终止及纠纷解决，适用中华人民共和国法律法规（仅为本协议之目的，不包括香港特别行政区及澳门特别行政区法律法规，和中国台湾地区有关规定）。</li>
              <li>若您与开若图公司之间发生任何纠纷或争议，由开若图公司与您协商解决。协商不成的，您同意将纠纷或争议提交被告所在地人民法院管辖。</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">七、其他</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>本协议所有条款的标题仅为阅读和理解方便，本身并无实际涵义，不能作为本协议涵义解释的依据。</li>
              <li>本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，并对双方具有约束力。如果某条款规定我们在特定情况下有特定权利，这并不意味着该权利是我们在该等特定情况下可以行使的唯一权利，也不意味着该条款取消或使涉及相同情况或主旨事项的任何其他条款无效或失效。任何一方未能执行或延迟执行本协议项下的任何权利、救济或条款，不应被视为放弃该权利、救济或条款。任何弃权必须明确以书面形式作出并由弃权方签署。任何权利或救济的单次或部分行使，不应妨碍该权利或补救措施或任何其他权利或补救措施的进一步或其他行使。</li>
              <li>如您对本协议有任何意见或建议，您可向 此间 平台（<a href="mailto:support@openwidget.net" className="text-blue-600 hover:underline">support@openwidget.net</a>）反馈，我们会给予您必要的帮助。</li>
            </ol>
          </section>

          <div className="border-t pt-8 pb-4">
            <p className="text-center text-gray-600">
              开若图科技（上海）有限公司
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}