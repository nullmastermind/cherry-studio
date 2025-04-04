import CozeAppLogo from '@renderer/assets/images/apps/coze.webp?url'
import DifyAppLogo from '@renderer/assets/images/apps/dify.svg?url'
import FalAIProviderLogo from '@renderer/assets/images/apps/fal-ai.png?url'
import GeminiAppLogo from '@renderer/assets/images/apps/gemini.png?url'
import GithubCopilotLogo from '@renderer/assets/images/apps/github-copilot.webp?url'
import GoogleTranslateProviderLogo from '@renderer/assets/images/apps/google-translate-logo.png?url'
import GrokAppLogo from '@renderer/assets/images/apps/grok.png?url'
import HuggingChatLogo from '@renderer/assets/images/apps/huggingchat.svg?url'
import MonicaLogo from '@renderer/assets/images/apps/monica.webp?url'
import NotebookLMAppLogo from '@renderer/assets/images/apps/notebooklm.svg?url'
import PerplexityAppLogo from '@renderer/assets/images/apps/perplexity.webp?url'
import PoeAppLogo from '@renderer/assets/images/apps/poe.webp?url'
import QwenlmAppLogo from '@renderer/assets/images/apps/qwenlm.webp?url'
import YouLogo from '@renderer/assets/images/apps/you.jpg?url'
import ClaudeAppLogo from '@renderer/assets/images/models/claude.png?url'
import DeepSeekProviderLogo from '@renderer/assets/images/providers/deepseek.png?url'
import GoogleAiStudioProviderLogo from '@renderer/assets/images/providers/google-ai-studio-logo.png?url'
import LLMAIVNLogo from '@renderer/assets/images/providers/llmaivn.png?url'
import OpenAiProviderLogo from '@renderer/assets/images/providers/openai.png?url'
import { MinAppType } from '@renderer/types'

export const DEFAULT_MIN_APPS: MinAppType[] = [
  {
    id: 'llmaivn',
    name: 'LLM AI VN',
    url: 'https://llm.ai.vn/',
    logo: LLMAIVNLogo,
    bodered: true
  },
  {
    id: 'anthropic',
    name: 'Claude',
    url: 'https://claude.ai/',
    logo: ClaudeAppLogo
  },
  {
    id: 'openai',
    name: 'ChatGPT',
    url: 'https://chatgpt.com/',
    logo: OpenAiProviderLogo,
    bodered: true
  },
  {
    id: 'gemini',
    name: 'Gemini',
    url: 'https://gemini.google.com/',
    logo: GeminiAppLogo
  },
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio',
    logo: GoogleAiStudioProviderLogo,
    url: 'https://aistudio.google.com/'
  },
  // {
  //   id: 'silicon',
  //   name: 'SiliconFlow',
  //   url: 'https://cloud.siliconflow.cn/playground/chat',
  //   logo: SiliconFlowProviderLogo
  // },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    url: 'https://chat.deepseek.com/',
    logo: DeepSeekProviderLogo
  },
  // {
  //   id: 'yi',
  //   name: '万知',
  //   url: 'https://www.wanzhi.com/',
  //   logo: WanZhiAppLogo,
  //   bodered: true
  // },
  // {
  //   id: 'zhipu',
  //   name: '智谱清言',
  //   url: 'https://chatglm.cn/main/alltoolsdetail',
  //   logo: ZhipuProviderLogo
  // },
  // {
  //   id: 'moonshot',
  //   name: 'Kimi',
  //   url: 'https://kimi.moonshot.cn/',
  //   logo: KimiAppLogo
  // },
  // {
  //   id: 'baichuan',
  //   name: 'Baixiao Ying',
  //   url: 'https://ying.baichuan-ai.com/chat',
  //   logo: BaicuanAppLogo
  // },
  // {
  //   id: 'dashscope',
  //   name: '通义千问',
  //   url: 'https://tongyi.aliyun.com/qianwen/',
  //   logo: QwenModelLogo
  // },
  // {
  //   id: 'stepfun',
  //   name: '跃问',
  //   url: 'https://yuewen.cn/chats/new',
  //   logo: YuewenAppLogo,
  //   bodered: true
  // },
  // {
  //   id: 'doubao',
  //   name: '豆包',
  //   url: 'https://www.doubao.com/chat/',
  //   logo: DoubaoAppLogo
  // },
  // {
  //   id: 'cici',
  //   name: 'Cici',
  //   url: 'https://www.cici.com/chat/',
  //   logo: CiciAppLogo
  // },
  // {
  //   id: 'minimax',
  //   name: '海螺',
  //   url: 'https://hailuoai.com/',
  //   logo: HailuoModelLogo
  // },
  // {
  //   id: 'groq',
  //   name: 'Groq',
  //   url: 'https://chat.groq.com/',
  //   logo: GroqProviderLogo
  // },
  // {
  //   id: 'baidu-ai-chat',
  //   name: 'Baidu AI',
  //   logo: BaiduAiAppLogo,
  //   url: 'https://yiyan.baidu.com/'
  // },
  // {
  //   id: 'baidu-ai-search',
  //   name: '百度AI搜索',
  //   logo: BaiduAiSearchLogo,
  //   url: 'https://chat.baidu.com/',
  //   bodered: true,
  //   style: {
  //     padding: 5
  //   }
  // },
  // {
  //   id: 'tencent-yuanbao',
  //   name: 'Tencent Yuanbao',
  //   logo: TencentYuanbaoAppLogo,
  //   url: 'https://yuanbao.tencent.com/chat',
  //   bodered: true
  // },
  // {
  //   id: 'sensetime-chat',
  //   name: '商量',
  //   logo: SensetimeAppLogo,
  //   url: 'https://chat.sensetime.com/wb/chat',
  //   bodered: true
  // },
  // {
  //   id: 'spark-desk',
  //   name: 'SparkDesk',
  //   logo: SparkDeskAppLogo,
  //   url: 'https://xinghuo.xfyun.cn/desk'
  // },
  // {
  //   id: 'metaso',
  //   name: '秘塔AI搜索',
  //   logo: MetasoAppLogo,
  //   url: 'https://metaso.cn/'
  // },
  {
    id: 'poe',
    name: 'Poe',
    logo: PoeAppLogo,
    url: 'https://poe.com'
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    logo: PerplexityAppLogo,
    url: 'https://www.perplexity.ai/'
  },
  // {
  //   id: 'devv',
  //   name: 'DEVV_',
  //   logo: DevvAppLogo,
  //   url: 'https://devv.ai/'
  // },
  // {
  //   id: 'tiangong-ai',
  //   name: '天工AI',
  //   logo: TiangongAiLogo,
  //   url: 'https://www.tiangong.cn/',
  //   bodered: true
  // },
  {
    id: 'hugging-chat',
    name: 'HuggingChat',
    logo: HuggingChatLogo,
    url: 'https://huggingface.co/chat/',
    bodered: true
  },
  // {
  //   id: 'Felo',
  //   name: 'Felo',
  //   logo: FeloAppLogo,
  //   url: 'https://felo.ai/',
  //   bodered: true
  // },
  // {
  //   id: 'duckduckgo',
  //   name: 'DuckDuckGo',
  //   logo: DuckDuckGoAppLogo,
  //   url: 'https://duck.ai'
  // },
  // {
  //   id: 'bolt',
  //   name: 'bolt',
  //   logo: BoltAppLogo,
  //   url: 'https://bolt.new/',
  //   bodered: true
  // },
  // {
  //   id: 'nm',
  //   name: '纳米AI',
  //   logo: NamiAiLogo,
  //   url: 'https://bot.n.cn/',
  //   bodered: true
  // },
  // {
  //   id: 'nm-search',
  //   name: '纳米AI搜索',
  //   logo: NamiAiSearchLogo,
  //   url: 'https://www.n.cn/',
  //   bodered: true
  // },
  // {
  //   id: 'thinkany',
  //   name: 'ThinkAny',
  //   logo: ThinkAnyLogo,
  //   url: 'https://thinkany.ai/',
  //   bodered: true,
  //   style: {
  //     padding: 5
  //   }
  // },
  // {
  //   id: 'hika',
  //   name: 'Hika',
  //   logo: HikaLogo,
  //   url: 'https://hika.fyi/',
  //   bodered: true
  // },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    logo: GithubCopilotLogo,
    url: 'https://github.com/copilot'
  },
  // {
  //   id: 'genspark',
  //   name: 'Genspark',
  //   logo: GensparkLogo,
  //   url: 'https://www.genspark.ai/'
  // },
  {
    id: 'grok',
    name: 'Grok',
    logo: GrokAppLogo,
    url: 'https://grok.com',
    bodered: true
  },
  {
    id: 'qwenlm',
    name: 'QwenLM',
    logo: QwenlmAppLogo,
    url: 'https://qwenlm.ai/'
  },
  // {
  //   id: 'flowith',
  //   name: 'Flowith',
  //   logo: FlowithAppLogo,
  //   url: 'https://www.flowith.io/',
  //   bodered: true
  // },
  // {
  //   id: '3mintop',
  //   name: '3MinTop',
  //   logo: ThreeMinTopAppLogo,
  //   url: 'https://3min.top',
  //   bodered: false
  // },
  // {
  //   id: 'xiaoyi',
  //   name: '小艺',
  //   logo: XiaoYiAppLogo,
  //   url: 'https://xiaoyi.huawei.com/chat/',
  //   bodered: true
  // },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    logo: NotebookLMAppLogo,
    url: 'https://notebooklm.google.com/'
  },
  {
    id: 'coze',
    name: 'Coze',
    logo: CozeAppLogo,
    url: 'https://www.coze.com/space',
    bodered: true
  },
  {
    id: 'dify',
    name: 'Dify',
    logo: DifyAppLogo,
    url: 'https://cloud.dify.ai/apps',
    bodered: true,
    style: {
      padding: 5
    }
  },
  // {
  //   id: 'wpslingxi',
  //   name: 'WPS灵犀',
  //   logo: WPSLingXiLogo,
  //   url: 'https://copilot.wps.cn/',
  //   bodered: true
  // },
  // {
  //   id: 'lechat',
  //   name: 'LeChat',
  //   logo: LeChatLogo,
  //   url: 'https://chat.mistral.ai/chat',
  //   bodered: true
  // },
  // {
  //   id: 'abacus',
  //   name: 'Abacus',
  //   logo: AbacusLogo,
  //   url: 'https://apps.abacus.ai/chatllm',
  //   bodered: true
  // },
  // {
  //   id: 'lambdachat',
  //   name: 'Lambda Chat',
  //   logo: LambdaChatLogo,
  //   url: 'https://lambda.chat/',
  //   bodered: true
  // },
  {
    id: 'monica',
    name: 'Monica',
    logo: MonicaLogo,
    url: 'https://monica.im/home/',
    bodered: true
  },
  {
    id: 'you',
    name: 'You',
    logo: YouLogo,
    url: 'https://you.com/'
  },
  // {
  //   id: 'zhihu',
  //   name: '知乎直答',
  //   logo: ZhihuAppLogo,
  //   url: 'https://zhida.zhihu.com/',
  //   bodered: true
  // }
  {
    id: 'fal-ai',
    name: 'fal.ai',
    logo: FalAIProviderLogo,
    url: 'https://fal.ai/'
  },
  {
    id: 'google-translate',
    name: 'Google Translate',
    logo: GoogleTranslateProviderLogo,
    url: 'https://translate.google.com/'
  }
]
