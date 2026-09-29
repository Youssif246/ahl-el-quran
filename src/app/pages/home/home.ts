import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface ProgramCard {
  id: number;
  num: string;
  icon: string;
  title: string;
  badge: string;
  duration: string;
  desc: string;
  highlights: string[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export interface JourneyStepItem {
  step: string;
  title: string;
  desc: string;
  badge: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  isPlayingAudio = signal<boolean>(false);
  audioProgress = signal<number>(35);

  programs: ProgramCard[] = [
    {
      id: 1,
      num: '01',
      icon: 'fa-solid fa-book-quran',
      title: 'حفظ القرآن الكريم',
      badge: 'الأكثر طلباً',
      duration: 'مسار مستمر',
      desc: 'مسار التدرج اليومي لحفظ كتاب الله كاملاً أو أجزاء منه وفق خطة مجدولة تناسب قدراتك.',
      highlights: ['تسميع يومي مباشر', 'ضبط المتشابهات', 'خطط حفظ مخصصة']
    },
    {
      id: 2,
      num: '02',
      icon: 'fa-solid fa-arrows-rotate',
      title: 'المراجعة والتثبيت',
      badge: 'للحفاظ',
      duration: 'مكثف',
      desc: 'تمكين المحفوظ وترسيخه في الصدر والتخلص من التردد ومواضع النسيان والخلط في الآيات.',
      highlights: ['جداول مراجعة مدروسة', 'اختبارات تقييمية دورية', 'تمكين الحفظ القديم']
    },
    {
      id: 3,
      num: '03',
      icon: 'fa-solid fa-microphone-lines',
      title: 'تصحيح التلاوة والتجويد',
      badge: 'لكافة المستويات',
      duration: '٣ - ٦ أشهر',
      desc: 'تدريب اللسان على مخارج الحروف وصفاتها وتطبيق أحكام التجويد عملياً لتلاوة منضبطة.',
      highlights: ['تصحيح نطقي مباشر', 'شرح ميسر لأحكام التجويد', 'تدريب على الوقف والابتداء']
    },
    {
      id: 4,
      num: '04',
      icon: 'fa-solid fa-scroll',
      title: 'القراءات والإجازات',
      badge: 'للمتقنين',
      duration: 'مسار إجازة',
      desc: 'دراسة الروايات المتواترة (حفص، ورش، قالون) وعرض القرآن غيباً لنيل الإجازة بالسند المتصل.',
      highlights: ['سند متصل إلى النبي ﷺ', 'دراسة الشاطبية والدرة', 'إشراف شيوخ كبار']
    },
    {
      id: 5,
      num: '05',
      icon: 'fa-solid fa-child-reaching',
      title: 'برنامج الأطفال والبراعم',
      badge: 'من ٥ سنوات',
      duration: 'تفاعلي ممتع',
      desc: 'غرس حب القرآن في نفوس الناشئة عبر القاعدة النورانية والتلقين الميسر والتحفيز المستمر.',
      highlights: ['معلمون متخصصون للأطفال', 'أساليب تحفيزية وجوائز', 'قصار السور والأذكار']
    },
    {
      id: 6,
      num: '06',
      icon: 'fa-solid fa-graduation-cap',
      title: 'العلوم الإسلامية واللغة',
      badge: 'مسار إثرائي',
      duration: 'فصول مرنة',
      desc: 'دروس مساندة في التفسير وغريب القرآن وأساسيات النحو الضرورية للتدبر والفهم الواعي.',
      highlights: ['تفسير الآيات والتدبر', 'قواعد النحو والإعراب', 'بناء الوعي الإيماني']
    }
  ];

  features: FeatureItem[] = [
    {
      icon: 'fa-solid fa-award',
      title: 'معلمون ومقرئون مجازون',
      desc: 'نخبة من خريجي الأزهر الشريف والجامعات الإسلامية الكبرى، يحملون إجازات بالسند المتصل.'
    },
    {
      icon: 'fa-solid fa-clock-rotate-left',
      title: 'مواعيد دراسية مرنة',
      desc: 'اختر الأوقات المناسبة لجدولك اليومي على مدار ٢٤ ساعة طوال أيام الأسبوع لتناسب ظروفك.'
    },
    {
      icon: 'fa-solid fa-bullseye',
      title: 'مناهج معتمدة ومخصصة',
      desc: 'خطط دراسية فردية تراعي سرعة استيعابك ومستواك الحالي وتتدرج معك خطوة بخطوة.'
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'متابعة وتقييم فردي',
      desc: 'تقارير أداء دورية توضح مدى تقدمك ومقدار إنجازك في الحفظ والتجويد والمراجعة.'
    }
  ];

  journeySteps: JourneyStepItem[] = [
    {
      step: '٠١',
      badge: 'الخطوة الأولى',
      title: 'حجز جلسة التقييم المجانية',
      desc: 'سجّل بياناتك في دقيقة واحدة لتحديد مستواك الحالي والاستماع لتلاوتك مع أحد المعلمين.'
    },
    {
      step: '٠٢',
      badge: 'الخطوة الثانية',
      title: 'تحديد المسار والجدول الزمني',
      desc: 'نضع لك خطة تعليمية مخصصة تناسب هدفك ونحدد الأيام والساعات الملائمة لك.'
    },
    {
      step: '٠٣',
      badge: 'الخطوة الثالثة',
      title: 'بدء الحلقات التفاعلية المباشرة',
      desc: 'انضم إلى جلستك الخاصة عبر المنصة وتفاعل مباشرة مع معلمك بالصوت والصورة.'
    },
    {
      step: '٠٤',
      badge: 'الخطوة الرابعة',
      title: 'الإتقان والارتقاء والختم',
      desc: 'متابعة مستمرة حتى تبلغ الإتقان التام وتتم حفظ القرآن الكريم أو تنال الإجازة بالسند.'
    }
  ];

  toggleAudioPlay() {
    this.isPlayingAudio.update(v => !v);
  }
}
