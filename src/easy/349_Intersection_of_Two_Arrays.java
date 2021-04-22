package com.leetcode;

import java.util.*;
import java.util.stream.Collectors;

public class Main {

	public static void main(String[] args) {
		int[] nums1 = { 4, 9, 5 };
		int[] nums2 = { 9, 4, 9, 8, 4 };
		int[] a = intersection(nums1, nums2);
		System.out.println(a);
	}

	public static int[] intersection(int[] nums1, int[] nums2) {
		ArrayList<Integer> list1 = new ArrayList(Arrays.stream(nums1).boxed().collect(Collectors.toSet()));
		ArrayList<Integer> list2 = new ArrayList(Arrays.stream(nums2).boxed().collect(Collectors.toSet()));
		Set<Integer> set = new HashSet<Integer>();
		for (Integer a : list1) {
			for (Integer b : list2) {
				if (a.equals(b))
					set.add(a);
			}
		}
		return set.stream().mapToInt(Integer::intValue).toArray();
	}
}
