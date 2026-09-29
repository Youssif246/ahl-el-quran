import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SystemFeature {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-study-system',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './study-system.html',
  styleUrl: './study-system.css'
})
export class StudySystemComponent {
  features: SystemFeature[] = [
    {
      number: '٠١',
      title: 'تعليم عن بُعد مباشر',
      description: 'حلقات قرآنية تفاعلية تتيح للدارس التلقي والاستماع والتصحيح المباشر دون عناء التنقل.'
    },
    {
      number: '٠٢',
      title: 'خطة تعليمية متدرجة',
      description: 'تحديد أهداف واضحة ومسار منظم يتناسب مع مستوى الدارس وقدرته على الاستيعاب والحفظ.'
    },
    {
      number: '٠٣',
      title: 'مرونة الأوقات والمسارات',
      description: 'جداول متنوعة تلائم أوقات الطلاب والموظفين وربات البيوت بمختلف الفئات العمرية.'
    },
    {
      number: '٠٤',
      title: 'متابعة وتقويم مستمر',
      description: 'حرص مستمر على قياس التطور، وتثبيت الحفظ القديم، ومراجعة التلاوة بصورة دورية.'
    }
  ];
}
