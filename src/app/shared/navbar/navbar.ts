import { Component, HostListener, ViewEncapsulation, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  isScrolled = signal<boolean>(false);
  mobileMenuOpen = signal<boolean>(false);

  navItems = [
    { label: 'الرئيسية', sub: 'الصفحة الترحيبية والتعريفية', path: '/', exact: true, icon: 'fa-solid fa-house' },
    { label: 'عن الأكاديمية', sub: 'رؤيتنا ورسالتنا القرآنية', path: '/about', exact: false, icon: 'fa-solid fa-book-quran' },
    { label: 'البرامج التعليمية', sub: 'مسارات التحفيظ والإتقان', path: '/programs', exact: false, icon: 'fa-solid fa-graduation-cap' },
    { label: 'نظام الدراسة', sub: 'منهجية التعليم والحلقات', path: '/learning-system', exact: false, icon: 'fa-solid fa-compass' },
    { label: 'تواصل معنا', sub: 'احجز جلستك التقييمية', path: '/contact', exact: false, icon: 'fa-solid fa-paper-plane' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 30);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => {
      const next = !v;
      if (typeof document !== 'undefined') {
        document.body.style.overflow = next ? 'hidden' : '';
      }
      return next;
    });
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
