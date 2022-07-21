import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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

    constructor(
    ) { }

    ngOnInit(): void {
        this.setNavigationLinks();
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

    setNavigationLinks() {

        // Gear
        let gear = new NavLink('Gear', '/gear', true);
        gear.children.push(new NavLink('Keystep 37', '/keystep', false));
        gear.children.push(new NavLink('Corder', '/corder', false));
        gear.children.push(new NavLink('Neutron', '/neutron', false));
        gear.children.push(new NavLink('Norns Shield', '/norns', false));
        this.navigationLinks.push(gear);

        // Software
        let software = new NavLink('Software', '/software', true);
        software.children.push(new NavLink('Cubase', '/cubase', false));
        software.children.push(new NavLink('Open Stage Control', '/osc', false));
        this.navigationLinks.push(software);

    }

}