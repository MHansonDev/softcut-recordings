import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import System from 'src/app/system';
import { NavLink } from './nav-link.model';

@Component({
    selector: 'navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.scss'],

    animations: [
        trigger('indicatorRotate', [
            state('collapsed', style({ transform: 'rotate(0deg)' })),
            state('expanded', style({ transform: 'rotate(180deg)' })),
            transition('expanded <=> collapsed',
                animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
            ),
        ])
    ]

})
export class NavigatorComponent implements OnInit {

    navigationLinks: NavLink[] = [];
    isMobile: boolean = false;

    constructor(
    ) { }

    ngOnInit(): void {
        this.setNavigationLinks();
        this.isMobile = System.determineMobile();
    }

    parentLinkClick(parentLink: NavLink) {
        parentLink.expanded = !parentLink.expanded;
    }

    childLinkSelected(link: NavLink) {
        for (let parentLink of this.navigationLinks) {
            for (let childLink of parentLink.children) {
                childLink.selected = (childLink == link);
            }
        }
    }

    homeClick() {
        for (let link of this.navigationLinks) {
            link.expanded = false;
        }
    }

    setNavigationLinks() {
        this.navigationLinks = [];

        // Gear
        let gear = new NavLink('Gear', '/gear', true);
        gear.children.push(new NavLink('Norns Shield', '/norns', false));
        gear.children.push(new NavLink('Neutron', '/neutron', false));
        gear.children.push(new NavLink('Keystep 37', '/keystep', false));
        gear.children.push(new NavLink('Corder', '/corder', false));
        gear.children.push(new NavLink('Hellraiser', '/hellraiser', false));
        gear.children.push(new NavLink('PO-12', '/po-12', false));
        this.navigationLinks.push(gear);

        // Software
        let software = new NavLink('Software', '/software', true);
        software.children.push(new NavLink('Cubase', '/cubase', false));
        software.children.push(new NavLink('Open Stage Control', '/osc', false));
        software.children.push(new NavLink('SuperCollider', '/supercollider', false));
        this.navigationLinks.push(software);

        // Archive
        let archive = new NavLink('Archive', '/archive', true);
        archive.children.push(new NavLink('Audio', '/audio', false));
        this.navigationLinks.push(archive);

    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.isMobile = System.determineMobile();
    }

}