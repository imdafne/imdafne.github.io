"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
            此间用户隐私政策
          </h1>
          <div className="text-sm text-gray-600">
            <p>更新日期：2025年8月27日</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-gray max-w-none"
        >
          <section className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">引言</h2>
            <p className="text-gray-700 mb-3">
              名称为"此间""Herein"的客户端应用程序以及我们不时提供的其他形式（统称"此间平台"）由开若图科技（上海）有限公司及其关联公司（以下简称"此间"或"我们"、"本平台"）合法拥有并运营，我们的注册地址为上海市黄浦区普安路128号703室H4座。"我们的"应相应地进行理解。为免疑义，我们亦保留调整此间平台名称的所有权利。
            </p>
            <p className="text-gray-700 mb-3">
              "用户"或"您"指此间平台的使用人。"您的"应相应地进行理解。
            </p>
            <p className="text-gray-700 mb-3">
              在本政策中，我们描述了我们依据相关法律法规和技术规范收集/使用/对外提供个人信息的做法，进一步阐述了您的个人信息相关权利。
            </p>
            <p className="text-gray-700 mb-3">
              本政策与您所使用我们的此间平台服务息息相关，您在下载、安装、启动、浏览、注册、登录、使用我们的此间平台服务时，我们将按照本政策的约定处理和保护您的个人信息。"此间平台服务"具有《此间用户服务协议》中所定义之含义。
            </p>
            <p className="text-gray-700">
              <strong>请在使用/继续使用我们的此间平台服务前，仔细并充分阅读本政策</strong>，并在需要时，按照本政策的指引，做出适当的选择。如果您不向我们提供特定个人信息，将可能导致我们无法向您提供此间平台服务或导致此间平台服务的使用受限，或者无法达到我们拟达到的服务效果。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">目录</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li><a href="#section1" className="text-blue-600 hover:underline">我们如何收集和使用您的个人信息</a></li>
              <li><a href="#section2" className="text-blue-600 hover:underline">我们如何共享、转让、公开披露您的个人信息</a></li>
              <li><a href="#section3" className="text-blue-600 hover:underline">我们如何存储和保护您的个人信息</a></li>
              <li><a href="#section4" className="text-blue-600 hover:underline">您如何管理您的个人信息</a></li>
              <li><a href="#section5" className="text-blue-600 hover:underline">您如何注销您的账号</a></li>
              <li><a href="#section6" className="text-blue-600 hover:underline">有关第三方提供产品和/或服务的特别说明</a></li>
              <li><a href="#section7" className="text-blue-600 hover:underline">我们如何使用Cookies和其他同类技术</a></li>
              <li><a href="#section8" className="text-blue-600 hover:underline">未成年人保护</a></li>
              <li><a href="#section9" className="text-blue-600 hover:underline">我们如何更新隐私政策</a></li>
              <li><a href="#section10" className="text-blue-600 hover:underline">如何联系我们</a></li>
              <li><a href="#section11" className="text-blue-600 hover:underline">其他</a></li>
            </ol>
          </section>

          <section id="section1" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">一、我们如何收集和使用您的个人信息</h2>
            <p className="text-gray-700 mb-4">
              我们将在本政策中依次向您说明我们的产品与/或服务每项功能可能收集的个人信息范围、收集目的、收集方式，以及不提供您的个人信息可能导致的结果。请您知悉，您不提供各项功能实现所必要的对应信息时，仍然可以使用此间平台的其他功能。
            </p>
            <p className="text-gray-700 mb-4">
              我们会遵循正当、合法、必要的原则，出于本政策所述的以下目的，收集和使用您在使用我们服务过程中主动提供或因使用我们产品和/或服务而产生的个人信息。如果我们要将您的个人信息用于本政策未载明的其它用途，或基于特定目的将已经收集的信息用于其他目的，我们将以合理的方式向您告知，并在使用前再次征得您的同意。
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">1. 账号注册、登录及资料编辑</h3>
            <p className="text-gray-700 mb-4">
              当您注册或者登录此间账号时，我们会收集您的电子邮箱、Apple ID，以为您注册、登录账号。
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">2. 向您提供产品和/或服务</h3>
            <div className="pl-4 space-y-3">
              <p className="text-gray-700">
                <strong>2.1.</strong> 您可以在本产品中选择、排序您感兴趣的小组件，或者将小组件安装在设备桌面，我们会记录您的选择并按照您的选择排列展示小组件。
              </p>
              <p className="text-gray-700">
                <strong>2.2.</strong> 当您使用天气相关的小组件时，我们会向您申请位置权限、收集位置信息，来判断您所处区域并展示该区域的天气情况。如果您拒绝开启位置权限，您需要手动选择区域，并不会影响您使用本平台其他功能。
              </p>
              <p className="text-gray-700">
                <strong>2.3.</strong> 安全运行与风控验证。为了保障软件与服务的安全运行，防止您的个人信息被非法获取，更准确地预防欺诈和保护账号安全，我们会主动收集您的设备信息【包括：设备/硬件型号、设备名称、SIM卡序列号（如ICCID）、硬件/设备序列号（SN）、设备唯一标识符（包括：IMEI、IMSI、Android ID、IDFA、IDFV、OAID(Harmony OS)、OAID(Android)、MEID）】，运行中的进程，本应用程序的总体运行情况与频率、崩溃情况、安装使用情况、性能数据、来源，存储（相册、媒体和其他文件）、浏览器类型和设置、语言设置、传感器、操作系统、操作系统版本号和应用程序版本、应用列表、网络设备硬件地址（MAC地址）、WLAN-MAC、WLAN接入点（如SSID，BSSID）、IP地址、蓝牙地址、接入网络的方式、网络质量数据、基站、移动网络信息（包括运营商名称）、设备传感器数据（如加速度传感器、线性加速度传感器、重力传感器、陀螺仪传感器）、软件版本号以及软件使用记录信息上传到服务器处理，用于安全风控验证。如您不同意我们收集前述信息，可能无法完成风控验证。请您理解，为动态检测您的账号是否存在异常登录，每次您把此间平台切换至后台或重新启动程序时，我们可能会再次读取，我们将把读取频次控制在合理范围内。
              </p>
              <p className="text-gray-700">
                <strong>2.4.</strong> 客服功能。当您联系我们的客服时，我们系统可能会记录您与客服之间的沟通记录。为了您的账号与系统安全，我们可能需要您提供相关个人信息与您之前提供的个人信息相匹配以验证您的用户身份。验证成功后，我们可能会收集您与我们的沟通信息（账号信息、您为了证明相关事实而提供的图片/视频/文字信息及有关信息）、您的联系方式以及您与我们的沟通记录，以便合理地尽快尝试为您解决问题和改进我们的产品与/或服务。同时，我们可能会以电话、短信、站内信及相关方式主动联系您，沟通您在使用我们产品及服务过程中产生的问题。
              </p>
              <p className="text-gray-700">
                <strong>2.5.</strong> 我们在运营过程中可能会通过您在使用我们产品或服务的过程中提供的联系方式（电话、邮箱及其他联系方式）向您发送一种或多种的通知，例如消息告知、身份验证、安全验证、用户使用体验调研，我们也可能会以短信、电话的方式，为您提供您可能感兴趣的服务、功能或活动及相关商业性信息。如果您不想接受我们给您发送的商业广告，您可通过短信提示回复退订或提供的其他方式进行退订或关闭，也可以直接与我们联系进行退订。
              </p>
              <p className="text-gray-700">
                <strong>2.6.</strong> 设备权限调用汇总
              </p>
            </div>

            <div className="overflow-x-auto mt-4 mb-4">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">设备权限</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">对应业务功能</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">功能场景说明</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">是否可关闭</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">地理位置</td>
                    <td className="border border-gray-300 px-4 py-2">天气</td>
                    <td className="border border-gray-300 px-4 py-2">判断您所处区域并展示该区域的天气情况</td>
                    <td className="border border-gray-300 px-4 py-2">可以，关闭后仅影响对应功能，不影响此间平台其他功能</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">3. 征得授权同意的例外</h3>
            <p className="text-gray-700 mb-3">
              根据相关法律法规的规定，在以下情形中，我们可以在不征得您的授权同意的情况下收集、使用一些必要的个人信息：
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>为订立、履行个人作为一方当事人的合同所必需，或者按照依法制定的劳动规章制度和依法签订的集体合同实施人力资源管理所必需；</li>
              <li>为履行法定职责或者法定义务所必需；</li>
              <li>为应对突发公共卫生事件，或者紧急情况下为保护自然人的生命健康和财产安全所必需；</li>
              <li>为公共利益实施新闻报道、舆论监督等行为，在合理的范围内处理个人信息；</li>
              <li>依照《个人信息保护法》规定在合理的范围内处理个人自行公开或者其他已经合法公开的个人信息；</li>
              <li>法律法规规定的其他情形。</li>
            </ol>
          </section>

          <section id="section2" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">二、我们如何共享、转让、公开披露您的个人信息</h2>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">1. 共享</h3>
            <p className="text-gray-700 mb-3">
              对于您的个人信息，我们不会与任何公司、组织和个人进行共享，除非存在以下一种或多种情形：
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>事先已得到您的授权；</li>
              <li>您自行提出的；</li>
              <li>向商业合作伙伴共享个人信息是必要的；
                <p className="mt-2">您理解并知悉，为了向您提供更完善、优质的产品和服务，我们将授权商业合作伙伴为您提供部分服务。此种情形下，我们可能会与合作伙伴共享您的某些个人信息，以提供更好的客户服务和用户体验。请您注意，我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。我们将对信息数据的输出形式、流转、使用进行安全评估与处理，以保护数据安全。同时，我们会对合作伙伴进行严格的监督与管理，一旦发现其存在违规处理个人信息的行为，将立即停止合作并追究其法律责任。</p>
              </li>
              <li>当您选择参加我们及此间平台上的第三方举办的营销活动时，可能需要您提供姓名、性别、通信地址、联系方式、银行账号信息。这些信息可能涉及敏感个人信息，拒绝提供可能会影响您参加相关活动，但不会影响此间平台其他功能。只有经过您的同意，我们才会将这些信息与关联方或第三方共享，以保障您在活动中获得体验一致的服务，或委托第三方及时向您兑现奖励；</li>
              <li>与我们的关联公司必要共享：我们可能会与我们的关联公司共享您的个人信息。我们只会共享必要的个人信息，且这种共享受本政策所声明的目的的约束。关联公司如要改变个人信息的处理目的，将再次征得您的授权和同意；</li>
              <li>法律法规下的另一合法依据适用。</li>
            </ol>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">2. 转让</h3>
            <p className="text-gray-700 mb-3">
              转让是指将取得您个人信息的控制权转让给其他公司、组织或个人。除非获取您的明确同意，否则我们不会将您的个人信息转让给任何公司、组织或个人。但下述情形除外：
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>事先已征得您的同意；</li>
              <li>您自行提出的；</li>
              <li>如果公司发生合并、分立、解散、被宣告破产，将可能涉及到个人信息转让，此种情况下我们会告知您接收方的名称或者姓名和联系方式并要求新的持有您个人信息的公司、组织继续受本政策的约束。若接收方变更个人信息处理目的、处理方式的，我们将要求其重新获取您的明示同意；</li>
              <li>其他法律法规规定的情形。</li>
            </ol>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">3. 公开披露</h3>
            <p className="text-gray-700 mb-3">
              公开披露是指向社会或不特定人群发布信息的行为。原则上，我们不会对您的个人信息进行公开披露。但下述情况除外：
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>因公布有关账号中奖、处罚通知时展示必要的相关脱敏信息；</li>
              <li>取得您的明示同意后。</li>
            </ol>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">4. 共享、转让、公开披露个人信息授权同意的例外情形</h3>
            <p className="text-gray-700 mb-3">
              根据相关法律法规的规定，在以下情形中，我们可能在未事先征得您的授权同意的情况下共享、转让、公开披露您的个人信息：
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>为订立、履行个人作为一方当事人的合同所必需，或者按照依法制定的劳动规章制度和依法签订的集体合同实施人力资源管理所必需；</li>
              <li>为履行法定职责或者法定义务所必需；</li>
              <li>为应对突发公共卫生事件，或者紧急情况下为保护自然人的生命健康和财产安全所必需；</li>
              <li>为公共利益实施新闻报道、舆论监督等行为，在合理的范围内处理个人信息；</li>
              <li>依照《个人信息保护法》规定在合理的范围内处理个人自行公开或者其他已经合法公开的个人信息；</li>
              <li>法律法规规定的其他情形。</li>
            </ol>
            <p className="text-gray-700">
              请您了解，根据现行法律规定及监管要求，共享、转让经匿名化处理的个人信息，且确保数据接收方无法复原并重新识别个人信息主体的，无需另行向您通知并征得您的同意。
            </p>
          </section>

          <section id="section3" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">三、我们如何存储和保护您的个人信息</h2>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">1. 存储</h3>
            <p className="text-gray-700 mb-3">
              <strong>存储地点：</strong>我们将从运营此间平台中获得的个人信息存放于中华人民共和国境内。以下情形下，我们会确保在履行了法律规定的义务后，向中华人民共和国境外实体提供您的个人信息：
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-3">
              <li>适用的法律有明确规定;</li>
              <li>获得您的明确授权。</li>
            </ol>
            <p className="text-gray-700 mb-3">
              针对以上情形，我们会确保在遵守中国法律法规、具备个人信息传输出境的合法性基础后向境外提供您的个人信息。
            </p>
            <p className="text-gray-700 mb-3">
              <strong>存储时间：</strong>我们承诺始终按照法律的规定在合理必要期限内存储您的个人信息。超出上述期限后，我们将删除您的个人信息或对您的个人信息进行匿名化处理。
            </p>
            <p className="text-gray-700 mb-4">
              如我们停止运营，我们将及时停止收集您个人信息的活动，会尝试将停止运营的通知以逐一送达或公告的形式通知您，并对所持有的您的个人信息进行删除或匿名化处理。
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">2. 保护</h3>
            <p className="text-gray-700 mb-3">
              为了保护您的个人信息安全，我们将努力采取各种符合行业标准的安全措施来保护您的个人信息以最大程度降低您的个人信息被毁损、盗用、泄露、非授权访问、使用、披露和更改的风险。我们将积极建立数据分类分级制度、数据安全管理规范、数据安全开发规范来管理规范个人信息的存储和使用，确保未收集与我们提供的服务无关的个人信息。
            </p>
            <p className="text-gray-700 mb-3">
              您的账号均有安全保护功能，请妥善保管您的账号信息。我们将通过向其它服务器备份及相关安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您注意不存在"完善的信息安全措施"。为协助防止安全事故的发生，我们已按照法律法规的规定，制定了预警机制和应急预案。如确发生安全事件，我们将及时将相关情况选择以邮件、信函、电话、推送通知及按法律要求的相关方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况，紧密配合政府机关的工作。
            </p>
            <p className="text-gray-700">
              当我们的产品或服务发生停止运营的情形时，我们会及时停止继续收集个人信息的活动。上述变更，我们将尝试以推送通知、公告及相关形式通知您，并在合理的期限内删除您的个人信息或进行匿名化处理。
            </p>
          </section>

          <section id="section4" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">四、您如何管理您的个人信息</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                您可以通过本隐私政策披露的邮箱地址<a href="mailto:support@openwidget.net" className="text-blue-600 hover:underline">support@openwidget.net</a>联系我们以访问、获取、更正和删除您的个人信息。除此外，有下列情形之一的，我们将应当主动删除您的个人信息，您也有权请求我们删除：
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>处理目的已实现、无法实现或者为实现处理目的不再必要；</li>
                  <li>我们已停止提供产品或者服务，或者保存期限已届满；</li>
                  <li>您已明确撤回同意；</li>
                  <li>如您有足够的理由认为我们违反法律、行政法规或者违反约定处理您的个人信息；</li>
                  <li>法律、行政法规规定的其他情形。</li>
                </ol>
              </li>
              <li>
                <strong>变更或撤回授权范围</strong><br/>
                您可以通过设备本身操作系统变更或撤回您对设备权限的授权，不同设备型号的功能可能不尽相同，我们将根据您变更或撤回授权的设置进行个人信息的收集，如您撤回授权我们将不再收集与这些权限相关的信息，但提请您注意这将导致部分功能或全部功能的不可用。同时，您变更或撤回授权的决定，不会影响我们此前基于您的授权而进行的个人信息处理。
              </li>
              <li>
                <strong>附条件的个人信息转移权</strong><br/>
                若您需要将您的个人信息转移至其他平台、企业或组织，您可以通过本隐私政策所披露的方式联系我们。我们将对您的请求进行审核，在符合我国网信部门规定的条件下，我们将为您提供转移相应个人信息的途径。
              </li>
              <li>
                在符合相关法律要求的情况下，您的近亲属可以对您的相关个人信息行使上述查阅、复制、更正、删除等权利；您另有安排的除外。
              </li>
              <li>
                <strong>联系我们进行管理</strong><br/>
                出于安全性和身份识别的考虑，您可能无法直接通过此间平台的交互界面自行访问、更正或删除某些信息、撤回授权，如您确有必要访问、更正或删除该类信息、撤回授权，请您按照本政策所提供的联系方式，将您的问题通过邮件发送至指定的联系邮箱<a href="mailto:support@openwidget.net" className="text-blue-600 hover:underline">support@openwidget.net</a>，我们将尽快审核所涉问题，并在核验您的用户身份后及时予以回复。
              </li>
            </ol>
          </section>

          <section id="section5" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">五、您如何注销您的账号</h2>
            <p className="text-gray-700">
              您可以通过本隐私政策披露的邮箱地址<a href="mailto:support@openwidget.net" className="text-blue-600 hover:underline">support@openwidget.net</a>联系我们来注销您的账号。我们会在收到您的注销申请并验证您的用户身份后七个工作日内尽快为您处理。账号注销后，除法律明确规定必须由我们保留的个人信息外，您的个人信息将会从此间平台移除。
            </p>
          </section>

          <section id="section6" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">六、有关第三方提供产品和/或服务的特别说明</h2>
            <p className="text-gray-700">
              此间平台中可能包括第三方产品和/或服务或链接至第三方提供的信息和/或服务，该第三方产品和/或服务在使用前，您需要跳转到相应的小程序或第三方页面。您使用该第三方服务（包括您向该第三方提供的任何个人信息），须受该第三方的服务条款及隐私政策（而非本政策）约束，您需要仔细阅读其条款并自行决定是否接受。请您妥善保护自己的个人信息，仅在必要的情况下向他人提供。本政策仅适用于我们所收集、保存、使用、共享、披露信息，并不适用于任何第三方提供的服务或第三方的信息使用规则，第三方使用您信息时的行为由其自行负责。
            </p>
          </section>

          <section id="section7" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">七、我们如何使用Cookies和其他同类技术</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>在您接受cookies的情况下，此间平台会在您的计算机以及相关移动设备上设定或取用cookies，以便您能登录或使用依赖于cookies的此间平台服务。此间平台使用cookies可为您提供更加周到的服务。</li>
              <li>您有权选择接受或拒绝接受cookies。您可以通过修改浏览器设置的方式或在移动设备中设置拒绝接受cookies。但如果您选择拒绝接受cookies，则您可能无法登录或使用依赖于cookies的此间平台服务。</li>
              <li>通过此间平台所设cookies所取得的有关信息，将适用本政策。</li>
            </ol>
          </section>

          <section id="section8" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">八、未成年人保护</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>如果您是未成年人，请通知您的监护人共同阅读本政策，并在您使用我们的产品及服务、提交个人信息之前，寻求您的监护人的指导。若您未满十四周岁，请在获得您监护人的明确同意后再使用我们的产品及服务、提交个人信息。</li>
              <li>我们重视对未成年人个人信息的保护，未成年用户在填写个人信息时，请加强个人保护意识并谨慎对待，请在监护人指导下正确使用此间平台服务。</li>
              <li>我们将根据适用法律法规及本政策的规定保护未成年人用户信息的保密性及安全性。同时我们建立了严格的未成年人信息收集使用规则，以保护未成年人个人信息安全，您可以通过阅读《<Link href="/children-policy" className="text-blue-600 hover:underline">此间儿童/青少年个人信息保护规则</Link>》了解更具体的内容。若您是未成年人的监护人，当您对您所监护的未成年人使用我们的服务或其向我们提供的用户信息有任何疑问时，请您根据本政策提供的联系方式及时与我们联系。</li>
            </ol>
          </section>

          <section id="section9" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">九、我们如何更新隐私政策</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>为了给您提供更好的服务，我们会根据产品的更新情况及法律法规的相关要求更新本政策的条款，这些更新将构成本政策的一部分。未经您明确同意，我们不会削减您依据当前生效的本政策所应享受的权利。</li>
              <li>如遇本政策更新，我们会通过此间平台客户端推送通知或其他合理方式通知您，以便您能及时了解本政策的最新版本。</li>
            </ol>
          </section>

          <section id="section10" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">十、如何联系我们</h2>
            <p className="text-gray-700">
              如您对个人信息保护问题有任何投诉、建议、疑问，或您对本政策有任何疑问，您可以通过以下方式联系我们，我们将尽快审核所涉问题，并在验证您的用户身份后的十五个工作日内予以答复：<a href="mailto:support@openwidget.net" className="text-blue-600 hover:underline">support@openwidget.net</a>。
            </p>
          </section>

          <section id="section11" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">十一、其他</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>因本政策以及我们处理您个人信息事宜引起的任何争议，您可诉至被告所在地人民法院。</li>
              <li>如果您认为我们的个人信息处理行为损害了您的合法权益，您也可向有关政府部门进行反映。</li>
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