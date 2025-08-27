"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChildrenPolicyPage() {
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
            此间儿童/青少年个人信息保护规则
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-gray max-w-none"
        >
          <section className="mb-8 p-6 bg-green-50 border-l-4 border-green-400 rounded-lg">
            <p className="text-gray-700 mb-4">
              此间深知保护青少年（指未满十八周岁的未成年人）和儿童（特指未满十四周岁的未成年人）个人信息安全和隐私的重要性。在《此间用户隐私政策》的基础上，我们通过《此间儿童/青少年个人信息保护规则》（以下简称"本政策"）说明我们在收集和使用儿童/青少年（以下可统称为未成年人）个人信息时对应的处理规则和相关事宜。当本政策与《此间用户隐私政策》正文存在不一致的，本政策将优先适用。本政策未载明之处，则参照适用《此间用户隐私政策》。您通过线上界面勾选或者点击同意本政策表示您同意我们按照本政策收集、使用、存储、共享、转让和披露等处理儿童的个人信息。
            </p>
          </section>

          <section className="mb-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">监护人特别说明</h2>
            <p className="text-gray-700">
              为了维护您孩子的合法权益，我们希望您可以确保您的孩子在您的同意和指导下使用我们的产品并向我们提交个人信息。我们将根据本政策采取特殊措施保护相关信息。如果您不同意本政策的内容，请您要求您的孩子立即停止访问/使用我们的产品及服务。
            </p>
          </section>

          <section className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">儿童/青少年特别说明</h2>
            <p className="text-gray-700">
              如果您是未成年人，请通知您的监护人共同阅读本政策，并在您使用我们的产品及服务、提交个人信息之前，寻求您的监护人的指导。若您未满十四周岁，请在获得您监护人的明确同意后再使用我们的产品及服务、提交个人信息。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">儿童/青少年信息收集和保护</h2>
            <p className="text-gray-700 mb-4">
              我们会严格履行法律法规规定的儿童/青少年个人信息保护义务与责任，遵循正当必要、知情同意、目的明确、安全保障、依法利用的原则。
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">1.1 我们如何收集和使用儿童/青少年个人信息</h3>
            <p className="text-gray-700 mb-3">
              请您知悉，我们没有专门面向儿童/青少年提供的产品或服务，因此在我们无法自动识别和判断所收集和处理的个人信息是否属于儿童/青少年个人信息时，我们将按照《此间用户隐私政策》收集和处理用户的个人信息。但如用户通过实名认证或者其他方式使得我们获悉用户的儿童/青少年身份后，我们将尽到合理义务提醒用户在监护人的陪护和指导下使用我们的服务。此外，我们将依据本政策和法律法规的要求，对涉及儿童/青少年个人信息的账号采取特殊保护措施。
            </p>
            <p className="text-gray-700 mb-3">
              为向儿童/青少年提供我们的产品及服务，我们可能会收集和使用儿童/青少年个人信息。有关具体的使用目的、收集个人信息的范围，以及拒绝提供信息的后果，您及监护人可以查阅《此间用户隐私政策》详细了解。
            </p>
            <p className="text-gray-700 mb-3">
              我们使用的Cookies和其他同类技术也可能涉及自动收集儿童的个人信息，具体请您查阅《此间用户隐私政策》"我们如何使用Cookies和其他同类技术"相关部分详细了解。如我们超出上述范围收集和使用儿童个人信息，我们将再次征得儿童监护人的同意。
            </p>
            <p className="text-gray-700 mb-3">
              您知悉并确认，根据相关法律法规规定，以下情形中收集儿童/青少年的信息可能无需征得儿童/青少年监护人的授权同意：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>为订立、履行个人作为一方当事人的合同所必需，或者按照依法制定的劳动规章制度和依法签订的集体合同实施人力资源管理所必需；</li>
              <li>为履行法定职责或者法定义务所必需；</li>
              <li>为应对突发公共卫生事件，或者紧急情况下为保护自然人的生命健康和财产安全所必需；</li>
              <li>为公共利益实施新闻报道、舆论监督等行为，在合理的范围内处理个人信息；</li>
              <li>依照本法规定在合理的范围内处理个人自行公开或者其他已经合法公开的个人信息；</li>
              <li>法律法规规定的其他情形。</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-800">1.2 我们如何存储儿童/青少年个人信息</h3>
            <p className="text-gray-700 mb-3">
              我们在境内运营过程中收集和产生的儿童/青少年人个人信息存储于中华人民共和国境内，不会传输或存储至境外。如果发生信息的跨境传输，我们会单独向您以站内通知或邮件的方式告知您个人信息出境的目的、接收方、安全保障措施等情况，并征得您的单独授权同意。
            </p>
            <p className="text-gray-700 mb-3">
              我们会采取合理可行的措施，尽力避免收集和处理无关的儿童的个人信息。我们只会在达成本政策所述目的所需的期限内保留儿童/青少年的个人信息，除非法律有强制的留存要求。关于我们如何确定儿童/青少年个人信息存储期限请参见《此间用户隐私政策》的"我们如何存储和保护您的个人信息"部分。
            </p>
            <p className="text-gray-700 mb-3">
              如我们终止服务或运营，我们将及时停止继续收集儿童/青少年个人信息的活动，同时会遵守相关法律法规要求提前向监护人通知，并在终止服务或运营后对儿童/青少年的个人信息进行删除或匿名化处理，但法律法规或监管部门另有规定的除外。
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-800">1.3 我们如何共享、转让、公开披露儿童/青少年个人信息</h3>
            <p className="text-gray-700 mb-3">
              我们承诺对儿童/青少年个人信息进行严格保密，仅在符合本政策说明和您明确授权同意的情况下对外共享儿童个人信息。具体请参见《此间用户隐私政策》"我们如何共享、转让、公开披露您的信息"部分。
            </p>
            <p className="text-gray-700 mb-3">
              为了确保儿童/青少年个人信息对外提供的安全性，一般情况下我们不会委托第三方处理儿童/青少年个人信息。如确需委托第三方处理儿童/青少年个人信息时，我们将对受托方个人信息保护资质能力及受托处理行为进行安全评估，同时签署数据委托处理协议，明确双方责任、处理事项、处理期限、处理性质和目的，保证委托行为不得超出授权范围。
            </p>
            <p className="text-gray-700 mb-3">
              具体而言：
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>我们将在共享或委托处理前根据法律、行政法规的规定采取合规措施，包括但不限于自行或者委托第三方机构就儿童/青少年个人信息共享的合法性、正当性、必要性，及其保护儿童/青少年个人信息的能力进行评估。</li>
              <li>
                我们将在签署的相关协议中明确要求第三方对儿童/青少年个人信息采取保护措施，严格遵守相关法律法规与监管要求。我们会要求接收儿童/青少年个人信息的第三方遵守严格的保密义务及采取有效的保密措施，以不低于本政策的儿童/青少年个人信息保护水平处理儿童/青少年个人信息，禁止其将儿童/青少年个人信息用于未经儿童/青少年及其监护人授权的用途，并要求受托公司依法履行以下义务：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>按照法律、行政法规的规定和我们的要求处理儿童/青少年个人信息；</li>
                  <li>协助我们回应儿童/青少年监护人提出的申请；</li>
                  <li>采取措施保障信息安全，并在发生儿童/青少年个人信息泄露安全事件时，及时向我们反馈；</li>
                  <li>委托关系解除时及时删除儿童/青少年个人信息；</li>
                  <li>不得转委托；</li>
                  <li>其他依法应当履行的儿童/青少年个人信息保护义务。</li>
                </ul>
              </li>
            </ol>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-800">1.4 我们如何保护儿童/青少年个人信息</h3>
            <p className="text-gray-700 mb-3">
              我们非常重视儿童/青少年的隐私安全，并指定了专人负责儿童个人信息的保护，采取一切合理可行的措施，保护儿童个人信息。我们有专门的安全部门和数据安全流程保障未成年人信息安全。我们采取严格的数据使用和访问制度，确保只有授权人员才可访问，并适时对数据和技术进行安全审计。同时，我们会采取加密措施及其他技术手段存储儿童/青少年个人信息，确保儿童/青少年个人信息安全。如您希望了解更多，请查阅《此间用户隐私政策》的"我们如何存储和保护您的个人信息"章节，详细了解我们采取了哪些措施保护儿童/青少年个人信息。
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-800">1.5 如何管理儿童/青少年个人信息</h3>
            <p className="text-gray-700 mb-3">
              为了您或儿童/青少年在使用我们的产品及服务期间可以更加便捷地访问、管理个人信息，我们在产品中为您和儿童/青少年提供了相应的操作设置，您和儿童/青少年可以按照《此间用户隐私政策》中的"您如何管理您的个人信息"章节指引进行操作。
            </p>
            <p className="text-gray-700 mb-3">
              下列情形下，您或儿童/青少年可以通过《此间用户隐私政策》的"如何联系我们"章节所列的渠道联系我们，要求删除相应的儿童/青少年个人信息：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>我们违反法律、行政法规的规定或者双方的约定收集、存储、使用、对外提供儿童/青少年个人信息的；</li>
              <li>超出目的范围或者必要期限收集、存储、使用、对外提供儿童/青少年个人信息的；</li>
              <li>您撤回同意的；</li>
              <li>您或儿童/青少年通过注销等方式终止使用产品或者服务的。</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">其他</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                <strong>2.1</strong> 在用户未明示的一般情形下，我们无法识别且不会判断收集和处理的个人信息是否属于儿童/青少年个人信息，我们将严格按照《此间用户隐私政策》收集和处理用户的个人信息。
              </li>
              <li>
                <strong>2.2</strong> 如您对本政策存在任何疑问，或对于儿童个人信息处理存在任何投诉、意见，请<a href="mailto:support@openwidget.net" className="text-blue-600 hover:underline">support@openwidget.net</a>联系我们，我们在核验您的身份后，会根据您的请求和法律法规的规定进行处理。
              </li>
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