import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  academyHighlights = [
    { title: 'تعليم عن بُعد', desc: 'تعلّم ميسر من أي مكان' },
    { title: 'مسارات متنوعة', desc: 'برامج تناسب مختلف المستويات' },
    { title: 'لكافة الفئات', desc: 'للرجال والنساء والأطفال' },
    { title: 'منهجية متقنة', desc: 'تدرج علمي في الحفظ والضبط' }
  ];

  scrollToSection(targetId: string, event: Event) {
    event.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
