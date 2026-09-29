import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'الرئيسية', path: '/' },
    { label: 'عن الأكاديمية', path: '/about' },
    { label: 'البرامج التعليمية', path: '/programs' },
    { label: 'نظام الدراسة والرحلة', path: '/learning-system' },
    { label: 'تواصل معنا والتسجيل', path: '/contact' }
  ];

  programsList = [
    'حفظ القرآن الكريم',
    'المراجعة والتثبيت',
    'تصحيح التلاوة والتجويد',
    'القراءات والإجازات',
    'برنامج الأطفال',
    'العلوم الإسلامية واللغة العربية'
  ];
}
