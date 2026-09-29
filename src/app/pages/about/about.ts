import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  coreValues = [
    {
      number: '٠١',
      title: 'الإتقان والضبط',
      desc: 'العناية الفائقة بسلامة النطق، ومخارج الحروف، وتطبيق أحكام التجويد بدقة متناهية وفق المنهج المتوارث.'
    },
    {
      number: '٠٢',
      title: 'التيسير والمرونة',
      desc: 'توفير أوقات ومسارات ميسرة تمكّن الدارس من الجمع بين انشغالاته الحياتية واستمرارية تعلّم القرآن.'
    },
    {
      number: '٠٣',
      title: 'الأصالة والمعاصرة',
      desc: 'الجمع بين هيبة التلقي ووقار الحلقات القرآنية، مع الاستفادة من أحدث التقنيات الرقمية الميسرة للتعلّم.'
    },
    {
      number: '٠٤',
      title: 'الغرس التربوي والتدبر',
      desc: 'السعي لأن ينعكس نور القرآن على سلوك الدارس وفكره وأخلاقه، ليكون علماً نافعاً وعملاً صالحاً.'
    }
  ];

  institutionalPillars = [
    {
      title: 'رؤيتنا',
      desc: 'أن نكون المنصة القرآنية الرائدة عالمياً في تقديم تعليم متقن لكتاب الله وعلومه، يُلهم الأجيال ويغرس محبة القرآن في القلوب.'
    },
    {
      title: 'رسالتنا',
      desc: 'تيسير تعلّم القرآن الكريم تلاوةً وحفظاً وتدبراً للناطقين بالعربية وغيرها، عبر بيئة تفاعلية محفزة ومناهج تعليمية متدرجة تعتمد الإتقان.'
    }
  ];
}
