package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"sort"
	"strconv"
)

func main() {
	file, err := os.Open("../assets/day_1.1.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	elves := make([]int, 0)
	elf := 0
	for scanner.Scan() {
		s := scanner.Text()
		if s == "" {
			elves = append(elves, elf)
			elf = 0
		} else {
			i, err := strconv.Atoi(s)
			if err != nil {
				log.Fatal(err)
			}
			elf += i
		}
	}
	fmt.Println(mostCalories(elves))
	fmt.Println(topThree(elves))
}

func mostCalories(elves []int) int {
	highest := 0
	for _, elf := range elves {
		if elf > highest {
			highest = elf
		}
	}
	return highest
}

func topThree(elves []int) int {
	copy := elves
	var topThree = 0
	sort.Slice(copy, func(i, j int) bool {
		return copy[i] > copy[j]
	})
	for i := 0; i < 3; i++ {
		topThree = topThree + copy[i]
	}
	return topThree
}
