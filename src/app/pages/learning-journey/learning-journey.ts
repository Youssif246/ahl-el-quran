import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-learning-journey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning-journey.html',
  styleUrl: './learning-journey.css'
})
export class LearningJourneyComponent {
  steps: JourneyStep[] = [
    {
      step: '01',
      title: 'التسجيل والتواصل',
      description: 'تسجيل الرغبة في الالتحاق واختيار المجال التعليمي المناسب.'
    },
    {
      step: '02',
      title: 'اختيار المسار المناسب',
      description: 'تحديد البرنامج الملائم لمستوى الدارس وجدوله الزمني.'
    },
    {
      step: '03',
      title: 'بدء رحلة التعلّم',
      description: 'الانطلاق في الحلقات القرآنية والتفاعل المباشر مع المعلم.'
    },
    {
      step: '04',
      title: 'التعلّم والممارسة',
      description: 'الالتزام بالحفظ والمراجعة المستمرة وتصحيح الأداء.'
    },
    {
      step: '05',
      title: 'التقدم والاستمرار',
      description: 'التدرج في حفظ كتاب الله والارتقاء في درجات الإتقان.'
    }
  ];
}
